import Block from '../../modules/block/block'
import ButtonSimple from '../button-simple/ButtonSimple'

import tpl from './tpl.hbs'
import './style.css'

interface chatMenuProps {
    button1: ButtonSimple
    button2: ButtonSimple
    button3?: ButtonSimple
    attr?: {
        class?: string
    }
}

export default class ContextMenu extends Block {
    constructor(props: chatMenuProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            button1: this.props.button1,
            button2: this.props.button2,
            button3: this.props.button3,
        })
    }
}
