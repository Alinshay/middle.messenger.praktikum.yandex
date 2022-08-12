import Block from '../../modules/block'
import type Input from '../input/Input'
import type ButtonSimple from '../button-simple/ButtonSimple'

import tpl from './tpl.hbs'
import './style.css'

interface messageInputProps {
    input: Input
    attr: {
        class: string
    },
    submitButton: ButtonSimple
    button: ButtonSimple
    events?: {
        submit?: (e: MouseEvent) => void
    }
}

export default class MessageInput extends Block {
    constructor(props: messageInputProps) {
        super('form', props)
    }

    render(): Node | null {
        return this.compile(tpl, {
            button: this.props.button,
            input: this.props.input,
            submitButton: this.props.submitButton,
        })
    }
}
