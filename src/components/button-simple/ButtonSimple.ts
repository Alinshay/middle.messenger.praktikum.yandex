import Block from '../../modules/block'

import tpl from './tpl.hbs'

interface buttonProps {
    text?: string
    attr: {
        class?: string
        type?: string
    }
    events?: { click: (event: MouseEvent) => void }
}

export default class ButtonSimple extends Block {
    constructor(props: buttonProps) {
        super('button', props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props.text,
        })
    }
}
