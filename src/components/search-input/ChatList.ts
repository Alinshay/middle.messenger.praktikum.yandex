import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface searchInputProps {
    attr: {
        class?: string
        placeholder?: string
    }
    events: {
        focus?: (event: MouseEvent) => void
        blur?: (event: MouseEvent) => void
        input?: (event: MouseEvent) => void
    }
}

export default class SearchInput extends Block {
    constructor(props: searchInputProps) {
        super('input', props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
