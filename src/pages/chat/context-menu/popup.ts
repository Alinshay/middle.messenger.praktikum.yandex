import Popup from '../../../components/popup/Popup'
import Input from '../../../components/input/Input'
import Title from '../../../components/title/Title'
import Button from '../../../components/button/Button'
import chatController from '../../../api/controllers/chat'
import store from '../../../modules/store'

export const popupInputAdd = new Input({
    attr: {
        name: 'user',
        placeholder: 'User ID',
        class: 'input',
    },
})

export const popupButtonAdd = new Button({
    text: 'Add',
    attr: {
        class: 'button_main',
    },
    events: {
        click: (event) => {
            event.preventDefault()
            const chatId = store.getState().chat?.id
            const inputValue = (popupInputAdd.getContent() as HTMLInputElement).value
            if (chatId && inputValue) {
                chatController.addUserToChat(chatId, inputValue)
                    .then(() => {
                        (popupInputAdd.getContent() as HTMLInputElement).value = ''
                        popupAdd.hide()
                    })
            }
        },
    },
})

export const popupAdd = new Popup({
    title: new Title({
        value: 'ADD USER',
        attr: {
            class: 'title',
        },
    }),
    typeOfValue: 'input',
    input: popupInputAdd,
    value: '',
    button: popupButtonAdd,
    attr: {
        class: 'background-blur',
    },
    className: 'add-user-popup',
    events: {
        click: (event) => {
            const popupContent = document.querySelector('.add-user-popup')
            const withinBoundaries = event.composedPath().includes(popupContent as Element)
            if (!withinBoundaries) {
                popupAdd.hide()
            }
        },
    },
})

popupAdd.hide()

export const popupButtonDelete = new Button({
    text: 'Delete',
    attr: {
        class: 'button_main',
    },
    events: {
        click: (event) => {
            event.preventDefault()
            const chatId = store.getState().chat?.id
            const inputValue = (popupInputDelete.getContent() as HTMLInputElement).value
            if (chatId && inputValue) {
                chatController.deleteUserFromChat(chatId, inputValue)
                    .then(() => {
                        (popupInputDelete.getContent() as HTMLInputElement).value = ''
                        popupDelete.hide()
                    })
            }
        },
    },
})

export const popupInputDelete = new Input({
    attr: {
        name: 'user',
        placeholder: 'User ID',
        class: 'input',
    },
})

export const popupDelete = new Popup({
    title: new Title({
        value: 'DELETE USER',
        attr: {
            class: 'title',
        },
    }),
    typeOfValue: 'input',
    input: popupInputDelete,
    value: '',
    button: popupButtonDelete,
    attr: {
        class: 'background-blur',
    },
    className: 'delete-user-popup',
    events: {
        click: (event) => {
            const popupContent = document.querySelector('.delete-user-popup')
            const withinBoundaries = event.composedPath().includes(popupContent as Element)
            if (!withinBoundaries) {
                popupDelete.hide()
            }
        },
    },
})

popupDelete.hide()
