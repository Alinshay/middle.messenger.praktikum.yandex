import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface IInputProps {
    attr: {
        class?: string
        placeholder?: string
        name?: string
        type?: string
        value?: string
    }
    events?: {
        focus?: () => void
        blur?: () => void
        input?: () => void
    }
}

export default class Input extends Block {
    constructor(props: IInputProps) {
        super('input', props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
