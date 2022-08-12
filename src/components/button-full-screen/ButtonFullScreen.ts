import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface buttonProps {
    chatRef: string
}

export default class ButtonFullScreen extends Block {
    constructor(props: buttonProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            chatRef: this.props.chatRef,
        })
    }
}
