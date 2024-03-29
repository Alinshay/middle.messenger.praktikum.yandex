import Block from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface ITextWithLinkProps {
    text: string
    linkText: string
    attr: { class: string }
    events?: { click?: (event: MouseEvent) => void }
}

export default class TextWithLink extends Block {
    constructor(props: ITextWithLinkProps) {
        super('p', props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props.text,
            linkText: this.props.linkText,
        })
    }
}
