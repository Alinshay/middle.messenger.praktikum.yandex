import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface buttonProps {
    text: string
    attr: { class: string }
    events?: { click: (event: MouseEvent) => void }
}

export default class Button extends Block {
    constructor(props: buttonProps) {
        super('button', props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props.text,
        })
    }
}
