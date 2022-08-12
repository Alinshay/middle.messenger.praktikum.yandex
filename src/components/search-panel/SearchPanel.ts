import Block from '../../modules/block'
import type SearchInput from '../search-input/ChatList'

import tpl from './tpl.hbs'
import './style.css'

interface searchPanelProps {
    profileRef: string
    input: SearchInput
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
            profileRef: this.props.profileRef,
            input: this.props.input,
        })
    }
}
