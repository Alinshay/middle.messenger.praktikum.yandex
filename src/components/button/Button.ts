import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface IButtonProps {
    text: string
    attr: { class: string }
    events?: { click: (event: MouseEvent) => void }
}

export default class Button extends Block {
    constructor(props: IButtonProps) {
        super('button', props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props.text,
        })
    }
}
