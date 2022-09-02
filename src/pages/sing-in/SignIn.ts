import Block from '../../modules/block/block'
import type Button from '../../components/button/Button'
import type Title from '../../components/title/Title'
import type Input from '../../components/input/Input'
import type TextWithLink from '../../components/text-with-link/TextWithLink'

import tpl from './tpl.hbs'
import '../../style.css'

interface signInProps {
    title: Title
    loginInput: Input
    passwordInput: Input
    button: Button
    buttonLink: TextWithLink
    attr?: {
        class?: string
    }
    events: { submit: (event: MouseEvent) => void }
}

export default class SignIn extends Block {
    constructor(props: signInProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            title: this.props.title,
            loginInput: this.props.loginInput,
            passwordInput: this.props.passwordInput,
            button: this.props.button,
            buttonLink: this.props.buttonLink,
        })
    }
}
