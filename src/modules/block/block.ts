import { v4 as makeUUID } from 'uuid'

import EventBus from '../event-bus'

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_RENDER: 'flow:render',
        FLOW_CDU: 'flow:component-did-update',
    }

    private _element!: HTMLElement

    private _meta: {
        tagName?: string
        props?: Record<string, any>
    }

    private _id : string

    protected props: Record<string, any>

    // eslint-disable-next-line no-use-before-define
    protected children: Record<string, Block>

    protected eventBus: () => EventBus

    constructor(tagName : string = 'div', propsAndChildren : Record<string, any> = {}) {
        const { children, props } = this._getChildren(propsAndChildren)

        const eventBus = new EventBus()
        this._meta = {
            tagName,
            props,
        }
        this._id = makeUUID()

        this.props = this._makePropsProxy({ ...props, __id: this._id })
        this.children = this._makePropsProxy(children)

        this.eventBus = () => eventBus

        this._registerEvents(eventBus)
        eventBus.emit(Block.EVENTS.INIT)
    }

    _getChildren(propsAndChildren: Record<string, any>) {
        const children : Record<string, Block> = {}
        const props : Record<string, any> = {}

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value
            } else {
                props[key] = value
            }
        })

        return { children, props }
    }

    _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    _createResources(): void {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName as string)
    }

    init(): void {
        this._createResources()
        this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    }

    _componentDidMount(): void {
        this.componentDidMount()

        Object.values(this.children).forEach((child: Block) => {
            child.dispatchComponentDidMount()
        })
    }

    componentDidMount() {}

    dispatchComponentDidMount(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    _componentDidUpdate(oldProps: string, newProps: string): void {
        const isReRender = this.componentDidUpdate(oldProps, newProps)
        if (isReRender) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }

    componentDidUpdate(oldProps: string, newProps: string): boolean {
        return oldProps !== newProps
    }

    compile(template: Function, props?: Record<string, any>): Node | null {
        const propsAndStubs = { ...props }

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        })

        const fragment = this._createDocumentElement('template') as HTMLTemplateElement

        fragment.innerHTML = template(propsAndStubs)

        Object.values(this.children).forEach((child) => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
            if (stub) {
                stub.replaceWith(child.getContent())
            }
        })
        return fragment.content
    }

    setProps = (nextProps: object) : void => {
        Object.assign(this.props, nextProps)
    }

    get element() {
        return this._element
    }

    _addEvents(): void {
        const { events = {} } = this.props
        Object.keys(events).forEach((eventName) => {
            this._element.addEventListener(eventName, events[eventName])
        })
    }

    _removeEvents(): void {
        const { events = {} } = this.props

        Object.keys(events).forEach((eventName) => {
            this._element.removeEventListener(eventName, events[eventName])
        })
    }

    _addAttribute() {
        const { attr = {} } = this.props

        Object.entries(attr).forEach(([key, value]) => {
            this._element.setAttribute(key, value as string)
        })
    }

    _render(): void {
        const block = this.render() as unknown as Node
        this._removeEvents()
        this._element.textContent = ''
        this._element.appendChild(block)
        this._addEvents()
        this._addAttribute()
    }

    render() {}

    getContent(): HTMLElement | HTMLInputElement {
        return this.element
    }

    _makePropsProxy(props: Record<string, any>) {
        const self = this

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop as string]
                return (typeof value === 'function') ? value.bind(target) : value
            },

            set(target, prop, val) {
                const oldValue = target[prop as string]
                // eslint-disable-next-line no-param-reassign
                target[prop as string] = val
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, val)

                return true
            },

            deleteProperty() {
                throw new Error('нет доступа')
            },
        })
    }

    _createDocumentElement(tagName: string) {
        const element = document.createElement(tagName)
        element.setAttribute('data-id', this._id as string)
        return element
    }

    show(): void {
        this.getContent().style.display = 'flex'
    }

    hide(): void {
        this.getContent().style.display = 'none'
    }
}
