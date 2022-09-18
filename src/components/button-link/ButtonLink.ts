import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface IButtonLinkProps {
    title: string,
    mode?: string,
    attr?: {
        class?: string
        href?: string
    }
    events?: { click?: (event: MouseEvent) => void }
}

export default class ButtonLink extends Block {
    constructor(props: IButtonLinkProps) {
        super('button', props)
    }

    render() {
        return this.compile(tpl, {
            title: this.props.title,
            mode: this.props.mode,
        })
    }
}
