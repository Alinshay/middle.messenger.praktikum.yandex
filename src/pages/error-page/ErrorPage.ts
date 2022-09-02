import Block from '../../modules/block/block'
import type Title from '../../components/title/Title'
import type Button from '../../components/button/Button'

import tpl from './tpl.hbs'
import './style.css'

interface errorPageProps {
    button: Button
    titleWithMan: Title
    title: Title
    attr?: {
        class?: string
    }
}

export default class ErrorPage extends Block {
    constructor(props: errorPageProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            title: this.props.title,
            titleWithMan: this.props.titleWithMan,
            button: this.props.button,
        })
    }
}
