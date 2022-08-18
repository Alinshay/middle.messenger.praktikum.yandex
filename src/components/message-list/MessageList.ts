import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface messageListProps {
    data: Array<{
        date: string,
        messages: Array<{
            message: string,
            time: string,
            whose?: string
        }>
    }>,
    attr: {
        class: string
    }
}

export default class MessageList extends Block {
    constructor(props: messageListProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            data: this.props.data,
        })
    }
}
