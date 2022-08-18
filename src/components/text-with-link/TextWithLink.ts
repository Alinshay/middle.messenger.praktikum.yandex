import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface textWithLinkProps {
    text: string
    linkRef: string
    linkText: string
    attr: { class: string }
}

export default class TextWithLink extends Block {
    constructor(props: textWithLinkProps) {
        super('p', props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props.text,
            linkRef: this.props.linkRef,
            linkText: this.props.linkText,
        })
    }
}
