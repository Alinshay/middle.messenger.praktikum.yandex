import Block from '../../modules/block/block'
import type SearchInput from '../search-input/ChatList'
import ButtonSimple from '../button-simple/ButtonSimple'

import tpl from './tpl.hbs'
import './style.css'

interface searchPanelProps {
    input: SearchInput
    button: ButtonSimple
    attr?: {
        class?: string
    }
}

export default class SearchPanel extends Block {
    constructor(props: searchPanelProps) {
        super('nav', props)
    }

    render() {
        return this.compile(tpl, {
            input: this.props.input,
            button: this.props.button,
        })
    }
}
