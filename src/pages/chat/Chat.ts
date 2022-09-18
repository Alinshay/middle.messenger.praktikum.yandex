import Block from '../../modules/block/block'
import type LeftMenu from '../../components/left-menu/LeftMenu'
import type { ChatMenu } from '../../components/chat-menu/ChatMenu'
import type MessageList from '../../components/message-list/MessageList'
import type MessageInput from '../../components/message-input/MessageInput'
import type ContextMenu from '../../components/context-menu/ChatMenu'
import Popup from '../../components/popup/Popup'
import ChatController from '../../api/controllers/chat'

import tpl from './tpl.hbs'
import './style.css'

interface IChatProps {
    leftMenu: LeftMenu
    chatMenu: ChatMenu
    messageList: MessageList
    messageInput: MessageInput
    activeChat: string
    contextMenu: ContextMenu
    contextMenu2?: ContextMenu
    popupAddUser?: Popup
    popupDeleteUser?: Popup
    popupCreateChat?: Popup
    componentDidMount?: Function
    attr?: {
        class?: string
    }
}

export default class Chat extends Block {
    constructor(props: IChatProps) {
        super('div', props)
    }

    render() {
        ChatController.getChats()
        return this.compile(tpl, {
            leftMenu: this.props.leftMenu,
            chatMenu: this.props.chatMenu,
            messageList: this.props.messageList,
            messageInput: this.props.messageInput,
            activeChat: this.props.activeChat,
            contextMenu: this.props.contextMenu,
            contextMenu2: this.props.contextMenu2,
            popupAddUser: this.props.popupAddUser,
            popupDeleteUser: this.props.popupDeleteUser,
            popupCreateChat: this.props.popupCreateChat,
        })
    }
}
