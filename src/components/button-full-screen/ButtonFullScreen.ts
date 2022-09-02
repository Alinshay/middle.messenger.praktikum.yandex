import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface buttonProps {
    events?: { click: (event: MouseEvent) => void }
}

export default class ButtonFullScreen extends Block {
    constructor(props: buttonProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
