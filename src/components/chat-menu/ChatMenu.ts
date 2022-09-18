import Block from '../../modules/block/block'
import ButtonSimple from '../button-simple/ButtonSimple'
import { connect } from '../../utils/connect'
import { IState } from '../../modules/store'

import tpl from './tpl.hbs'
import './style.css'

interface IChatMenuProps {
    name: string,
    attr?: {
        class?: string
    }
    button: ButtonSimple
}

export class ChatMenu extends Block {
    constructor(props: IChatMenuProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            name: this.props.name,
            button: this.props.button,
        })
    }
}

function mapStateToProps(state : IState) {
    return {
        name: state?.chat?.users,
    }
}

export default connect(ChatMenu as unknown as typeof Block, mapStateToProps)
