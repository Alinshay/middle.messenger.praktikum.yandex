import Block from '../../modules/block/block'
import type Title from '../../components/title/Title'
import type Input from '../../components/input/Input'
import type Button from '../../components/button/Button'
import type TextWithLink from '../../components/text-with-link/TextWithLink'

import tpl from './tpl.hbs'
import './style.css'

interface ISignUpProps {
    title: Title
    loginInput: Input
    passwordInput: Input
    firstNameInput: Input
    secondNameInput: Input
    phoneNumberInput: Input
    repeatPasswordInput: Input
    emailInput: Input
    button: Button
    buttonLink: TextWithLink
    attr?: {
        class?: string
    }
    events: { submit: (event: MouseEvent) => void }
}

export default class SignUp extends Block {
    constructor(props: ISignUpProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            title: this.props.title,
            emailInput: this.props.emailInput,
            loginInput: this.props.loginInput,
            firstNameInput: this.props.firstNameInput,
            secondNameInput: this.props.secondNameInput,
            phoneNumberInput: this.props.phoneNumberInput,
            passwordInput: this.props.passwordInput,
            repeatPasswordInput: this.props.repeatPasswordInput,
            button: this.props.button,
            buttonLink: this.props.buttonLink,
        })
    }
}
