import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface buttonLinkProps {
    title: string,
    mode?: string,
    attr?: {
        class?: string
        href?: string
    }
}

export default class ButtonLink extends Block {
    constructor(props: buttonLinkProps) {
        super('a', props)
    }

    render() {
        return this.compile(tpl, {
            title: this.props.title,
            mode: this.props.mode,
        })
    }
}
