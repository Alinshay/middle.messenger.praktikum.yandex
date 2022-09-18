import Block from '../../modules/block/block'
import { connect } from '../../utils/connect'
import { IState } from '../../modules/store'

import tpl from './tpl.hbs'
import './style.css'

interface IChatListProps {
    chats: {
        chatList: Array<{
                id: number
                name: string
                time: string
                message: string
                badge?: string
            }>
    }
    mode?: string
    attr?: {
        class?: string
    }
    events?: {
        click?: (event: MouseEvent) => void
    }
}

export class ChatList extends Block {
    constructor(props: IChatListProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
            mode: this.props.mode,
        })
    }
}

function mapStateToProps(state : IState) {
    return {
        chats: { chatList: state?.chatList },
    }
}

export default connect(ChatList as unknown as typeof Block, mapStateToProps)
