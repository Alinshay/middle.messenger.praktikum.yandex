import ContextMenu from '../../../components/context-menu/ChatMenu'
import ButtonSimple from '../../../components/button-simple/ButtonSimple'

const button1 = new ButtonSimple({
    text: 'Фото или видео',
    attr: {
        class: 'context-menu__button',
        type: 'button',
    },
})

const button2 = new ButtonSimple({
    text: 'Файл',
    attr: {
        class: 'context-menu__button',
        type: 'button',
    },
})

const button3 = new ButtonSimple({
    text: 'Локация',
    attr: {
        class: 'context-menu__button',
        type: 'button',
    },
})

export default new ContextMenu({
    button1,
    button2,
    button3,
    attr: {
        class: 'context-menu',
    },
})
