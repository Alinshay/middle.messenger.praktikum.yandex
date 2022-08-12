import Block from '../../modules/block'
import type LeftMenu from '../../components/left-menu/LeftMenu'
import type ChatMenu from '../../components/chat-menu/ChatMenu'
import type MessageList from '../../components/message-list/MessageList'
import type MessageInput from '../../components/message-input/MessageInput'
import type ContextMenu from '../../components/context-menu/ChatMenu'

import tpl from './tpl.hbs'
import './style.css'

interface chatProps {
    leftMenu: LeftMenu
    chatMenu: ChatMenu
    messageList: MessageList
    messageInput: MessageInput
    activeChat: string
    contextMenu: ContextMenu
    componentDidMount?: Function
    attr?: {
        class?: string
    }
}

export default class Chat extends Block {
    constructor(props : chatProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            leftMenu: this.props.leftMenu,
            chatMenu: this.props.chatMenu,
            messageList: this.props.messageList,
            messageInput: this.props.messageInput,
            activeChat: this.props.activeChat,
            contextMenu: this.props.contextMenu,
        })
    }
}
