import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

export interface titleProps {
    value: string,
    attr: {
        class?: string
    }
}

export default class Title extends Block {
    constructor(props: titleProps) {
        super('h1', props)
    }

    render() {
        return this.compile(tpl, {
            value: this.props.value,
        })
    }
}
