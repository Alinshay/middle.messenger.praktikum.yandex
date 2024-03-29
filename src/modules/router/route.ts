import Block from '../block/block'
import render from '../../utils/renderDOM'

function isEqual(lhs: string, rhs: string) {
    return lhs === rhs
}

export interface IRoute {
    pathname: string
    view: Block
    props: Record<string, any>
}

export default class Route {
    private _pathname : string

    private _blockClass : Block

    private _block : Block | null

    private _props : Record<string, any>

    constructor(props: IRoute) {
        this._pathname = props.pathname
        this._blockClass = props.view
        this._block = null
        this._props = props.props
    }

    navigate(pathname : string) {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
        }
    }

    leave() {
        if (this._block !== null) {
            this._block.hide()
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname)
    }

    render() {
        if (!this._block) {
            this._block = this._blockClass
            render(this._props.rootQuery, this._block)
        }

        this._block.show()
    }
}
