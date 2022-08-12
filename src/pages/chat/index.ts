import SearchPanel from '../../components/search-panel/SearchPanel'
import LeftMenu from '../../components/left-menu/LeftMenu'
import ChatList from '../../components/chat-list/ChatList'
import chats from '../../stub/chat-list'
import ChatMenu from '../../components/chat-menu/ChatMenu'
import MessageList from '../../components/message-list/MessageList'
import MessageInput from '../../components/message-input/MessageInput'
import SearchInput from '../../components/search-input/ChatList'
import data from '../../stub/message-list'
import Input from '../../components/input/Input'
import ButtonSimple from '../../components/button-simple/ButtonSimple'
import { resetValidation, validation } from '../../utils/validation'

import Chat from './Chat'
import contextMenu from './context-menu'

contextMenu.hide()

const messageList = new MessageList({
    data,
    attr: {
        class: 'messages',
    },
})

const chatMenu = new ChatMenu({
    name: 'Lex',
    attr: {
        class: 'chat-menu',
    },
})

const chatList = new ChatList({
    chats,
    attr: {
        class: 'chat-list',
    },
})

const searchInput = new SearchInput({
    attr: {
        class: 'search-panel__input',
        placeholder: 'search',
    },
    events: {
        focus: () => {
            chatList.setProps({ mode: 'search' })
        },
        blur: () => {
            chatList.setProps({ mode: '', chats })
        },
        input: () => {
            const searchQuery = (searchInput.getContent() as HTMLInputElement).value
            const filteredChatList = chats.chatList.filter((item) => {
                const itemName = item.name.toUpperCase()
                return itemName.includes(searchQuery.toUpperCase())
            })
            chatList.setProps({ chats: { chatList: filteredChatList } })
        },
    },
})

const searchPanel = new SearchPanel({
    profileRef: '/profile',
    input: searchInput,
    attr: {
        class: 'search-panel',
    },
})

const leftMenu = new LeftMenu({
    searchPanel,
    chatList,
    attr: {
        class: 'left-menu',
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
            const isValid = validation(input.getContent(), /^.+$/)
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
            const result = {
                message: (input.getContent() as HTMLInputElement).value,
            }
            const isValid = validation(input.getContent(), /^.+$/)
            // eslint-disable-next-line no-console, no-unused-expressions
            isValid ? console.log(result) : console.log('invalid')
        },
    },
})

export default new Chat({
    leftMenu,
    chatMenu,
    messageList,
    messageInput,
    activeChat: '1',
    contextMenu,
    attr: {
        class: 'page',
    },
})
