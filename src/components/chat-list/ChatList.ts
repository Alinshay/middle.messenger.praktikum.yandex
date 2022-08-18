import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface chatListProps {
    chats: {
        chatList: Array<{
                id: number,
                name: string,
                time: string,
                message: string,
                badge?: string
            }>
    }
    mode?: string
    attr?: {
        class?: string
    }
}

export default class ChatList extends Block {
    constructor(props: chatListProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
            mode: this.props.mode,
        })
    }
}
