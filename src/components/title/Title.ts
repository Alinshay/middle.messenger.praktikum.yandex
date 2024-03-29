import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

export interface ITitleProps {
    value: string,
    attr: {
        class?: string
    }
}

export default class Title extends Block {
    constructor(props: ITitleProps) {
        super('h1', props)
    }

    render() {
        return this.compile(tpl, {
            value: this.props.value,
        })
    }
}
