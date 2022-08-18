import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface leftMenuProps {
    // как описать вложенные компоненты?
}

export default class LeftMenu extends Block {
    constructor(props: leftMenuProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            searchPanel: this.props.searchPanel,
            chatList: this.props.chatList,
        })
    }
}
