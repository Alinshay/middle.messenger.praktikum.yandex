import SearchPanel from '../../../components/search-panel/SearchPanel'
import LeftMenu from '../../../components/left-menu/LeftMenu'
import SearchInput from '../../../components/search-input/ChatList'
import ChatList, { ChatList as ChatListType } from '../../../components/chat-list/ChatList'
import Chat from '../index'
import { messageList } from '..'
import ButtonSimple from '../../../components/button-simple/ButtonSimple'
import store, { StoreEvents } from '../../../modules/store'
import chatController from '../../../api/controllers/chat'
import { router } from '../../../index'
import { getChatList } from '../../../utils/utils'
import Button from '../../../components/button/Button'
import Popup from '../../../components/popup/Popup'
import Input from '../../../components/input/Input'
import Title from '../../../components/title/Title'

let prevItemId : string = ''
let chats : Record<string, any> = []

store.on(StoreEvents.Updated, () => {
    chats = getChatList() || []
})

export const popupButton = new Button({
    text: 'Add',
    attr: {
        class: 'button_main',
    },
    events: {
        click: (event) => {
            event.preventDefault()
            const title = (popupInput.getContent() as HTMLInputElement).value
            if (title) {
                chatController.createChat(title)
            }
            (popupInput.getContent() as HTMLInputElement).value = ''
            popup.hide()
        },
    },
})

const popupInput = new Input({
    attr: {
        name: 'chat',
        placeholder: 'Chat name',
        class: 'input',
    },
})

export const popup = new Popup({
    title: new Title({
        value: 'CREATE CHAT',
        attr: {
            class: 'title',
        },
    }),
    typeOfValue: 'input',
    input: popupInput,
    value: '',
    button: popupButton,
    attr: {
        class: 'background-blur',
    },
    events: {
        click: (event) => {
            const popupContent = document.querySelector('.popup')
            const withinBoundaries = event.composedPath().includes(popupContent as Element)
            if (!withinBoundaries) {
                popup.hide()
            }
        },
    },
})

popup.hide()

const chatList = new ChatList({
    chats: {
        chatList: [],
    },
    attr: {
        class: 'chat-list',
    },
    events: {
        click: (e: MouseEvent & { path: Node[] }) => {
            e.path.forEach((item: Record<string, any>) => {
                if (item.tagName === 'BUTTON') {
                    Chat.setProps({ activeChat: item.id })
                    store.set('chat.id', item.id)
                    messageList.setProps({
                        data: [],
                    })

                    if (prevItemId) {
                        document.getElementById(prevItemId)?.classList.remove('active')
                    }
                    document.getElementById(item.id)?.classList.add('active')

                    prevItemId = item.id

                    chatController.useSocket()
                }
            })
        },
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
            chatList.setProps({ mode: '', chats: { chatList: chats } })
        },
        input: () => {
            const searchQuery = (searchInput.getContent() as HTMLInputElement).value
            const filteredChatList = chats.filter((item: Record<string, any>) => {
                const itemName = item.title.toUpperCase()
                return itemName.includes(searchQuery.toUpperCase())
            })
            chatList.setProps({ chats: { chatList: filteredChatList } })
        },
    },
})

const searchPanel = new SearchPanel({
    input: searchInput,
    button: new ButtonSimple({
        text: '',
        attr: {
            class: 'search-panel__button',
        },
        events: {
            click: () => {
                router.go('/settings')
            },
        },
    }),
    attr: {
        class: 'search-panel',
    },
})

export const leftMenu = new LeftMenu({
    searchPanel,
    chatList: chatList as ChatListType,
    button: new ButtonSimple({
        text: 'Add chat',
        attr: {
            class: 'add-chat__button',
        },
        events: {
            click: () => {
                popup.show()
            },
        },
    }),
    attr: {
        class: 'left-menu',
    },
})
