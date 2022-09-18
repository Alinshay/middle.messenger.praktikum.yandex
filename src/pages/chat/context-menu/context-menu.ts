import ContextMenu from '../../../components/context-menu/ChatMenu'
import ButtonSimple from '../../../components/button-simple/ButtonSimple'

import { popupAdd, popupDelete } from './popup'

const button1 = new ButtonSimple({
    text: 'Добавить пользователя',
    attr: {
        class: 'context-menu__button',
        type: 'button',
    },
    events: {
        click: () => {
            popupAdd.show()
            contextMenu2.hide()
        },
    },
})

const button2 = new ButtonSimple({
    text: 'Удалить пользователя',
    attr: {
        class: 'context-menu__button',
        type: 'button',
    },
    events: {
        click: () => {
            popupDelete.show()
            contextMenu2.hide()
        },
    },
})

export const contextMenu2 = new ContextMenu({
    button1,
    button2,
    attr: {
        class: 'context-menu_top',
    },
})
