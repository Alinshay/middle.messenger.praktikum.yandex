import ChatMenu, { ChatMenu as ChatMenuType } from '../../components/chat-menu/ChatMenu'
import MessageList from '../../components/message-list/MessageList'
import MessageInput from '../../components/message-input/MessageInput'
import Input from '../../components/input/Input'
import ButtonSimple from '../../components/button-simple/ButtonSimple'
import { resetValidation, validation } from '../../utils/validation'
import chatController from '../../api/controllers/chat'

import Chat from './Chat'
import contextMenu from './context-menu'
import { contextMenu2 } from './context-menu/context-menu'
import { leftMenu, popup } from './left-menu'
import { popupAdd, popupDelete } from './context-menu/popup'

contextMenu2.hide()
contextMenu.hide()

export const messageList = new MessageList({
    data: [],
    attr: {
        class: 'messages',
    },
})

const chatMenu = new ChatMenu({
    name: '',
    button: new ButtonSimple({
        text: '',
        attr: {
            class: 'chat-menu__button',
            type: 'button',
        },
        events: {
            click: () => {
                if (contextMenu2.getContent().style.display === 'none') {
                    contextMenu2.show()
                } else {
                    contextMenu2.hide()
                }
            },
        },
    }),
    attr: {
        class: 'chat-menu',
    },
})

const input = new Input({
    attr: {
        class: 'message-input__input',
        placeholder: '',
        name: 'message',
    },
    events: {
        blur: () => {
            const isValid = validation(input.getContent() as HTMLInputElement, /^.+$/)
            if (!isValid) {
                // eslint-disable-next-line no-use-before-define
                messageInput.getContent().classList.add('error')
            }
        },
        input: () => {
            // eslint-disable-next-line no-use-before-define
            resetValidation(messageInput.getContent())
        },
    },
})

const button = new ButtonSimple({
    text: '',
    attr: {
        class: 'message-input__button_attach',
        type: 'button',
    },
    events: {
        click: () => {
            if (contextMenu.getContent().style.display === 'none') {
                contextMenu.show()
            } else {
                contextMenu.hide()
            }
        },
    },
})

const submitButton = new ButtonSimple({
    text: '➤',
    attr: {
        class: 'message-input__button_send',
    },
})

const messageInput = new MessageInput({
    button,
    input,
    submitButton,
    attr: {
        class: 'message-input',
    },
    events: {
        submit: (event: MouseEvent) => {
            event.preventDefault()
            const inputElem : HTMLInputElement = input.getContent() as HTMLInputElement
            const isValid = validation(inputElem, /^.+$/)
            if (isValid) {
                (chatController.socket as WebSocket).send(JSON.stringify({
                    content: inputElem.value,
                    type: 'message',
                }))
                chatController.getChats()
                inputElem.value = ''
                messageList.getContent().scrollTop = messageList.getContent().scrollHeight
            }
        },
    },
})

export default new Chat({
    leftMenu,
    chatMenu: chatMenu as ChatMenuType,
    messageList,
    messageInput,
    activeChat: '',
    contextMenu,
    contextMenu2,
    popupAddUser: popupAdd,
    popupCreateChat: popup,
    popupDeleteUser: popupDelete,
    attr: {
        class: 'page',
    },
})
