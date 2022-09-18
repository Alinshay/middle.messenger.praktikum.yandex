import Block from '../../modules/block/block'

import tpl from './tpl.hbs'

import './style.css'

interface IMessageListProps {
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
    constructor(props: IMessageListProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            data: this.props.data,
        })
    }
}
