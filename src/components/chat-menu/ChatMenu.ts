import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface chatMenuProps {
    name: string,
    attr?: {
        class?: string
    }
}

export default class ChatMenu extends Block {
    constructor(props: chatMenuProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            name: this.props.name,
        })
    }
}
