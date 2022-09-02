import Block from '../../modules/block/block'
import type SearchPanel from '../search-panel/SearchPanel'
import type { ChatList } from '../chat-list/ChatList'
import type ButtonSimple from '../button-simple/ButtonSimple'

import tpl from './tpl.hbs'
import './style.css'

interface leftMenuProps {
    searchPanel: SearchPanel
    chatList: ChatList
    button: ButtonSimple
    attr?: { class?: string }
}

export default class LeftMenu extends Block {
    constructor(props: leftMenuProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            searchPanel: this.props.searchPanel,
            chatList: this.props.chatList,
            button: this.props.button,
        })
    }
}
