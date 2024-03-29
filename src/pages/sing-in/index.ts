import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import TextWithLink from '../../components/text-with-link/TextWithLink'
import { resetValidation, validation } from '../../utils/validation'
import { loginRegexp, passwordRegexp } from '../../utils/regexp'
import AuthController from '../../api/controllers/auth'
import { router } from '../../index'

import SignIn from './SignIn'

const title = new Title({
    value: 'Sign In',
    attr: {
        class: 'title',
    },
})

const loginInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'Login',
        name: 'login',
    },
    events: {
        focus: () => {
            validation(loginInput.getContent() as HTMLInputElement, loginRegexp)
        },
        blur: () => {
            validation(loginInput.getContent() as HTMLInputElement, loginRegexp)
        },
        input: () => {
            resetValidation(loginInput.getContent())
        },
    },
})

const passwordInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'Password',
        name: 'password',
        type: 'password',
    },
    events: {
        focus: () => {
            validation(passwordInput.getContent() as HTMLInputElement, passwordRegexp)
        },
        blur: () => {
            validation(passwordInput.getContent() as HTMLInputElement, passwordRegexp)
        },
        input: () => {
            resetValidation(passwordInput.getContent())
        },
    },
})

const button = new Button({
    text: 'Click me',
    attr: {
        class: 'button_main',
    },
})

const buttonLink = new TextWithLink({
    text: 'Don’t Have An Account?',
    linkText: 'Sign Up',
    attr: {
        class: 'link',
    },
    events: {
        click: (e) => {
            e.preventDefault()
            router.go('/signup')
        },
    },
})

export default new SignIn({
    title,
    loginInput,
    passwordInput,
    button,
    buttonLink,
    attr: {
        class: 'page',
    },
    events: {
        submit: (event: MouseEvent) => {
            event.preventDefault()
            const isValid = validation(loginInput.getContent() as HTMLInputElement, loginRegexp)
                && validation(passwordInput.getContent() as HTMLInputElement, passwordRegexp)

            const result = {
                login: (loginInput.getContent() as HTMLInputElement).value,
                password: (passwordInput.getContent() as HTMLInputElement).value,
            }

            if (isValid) {
                AuthController.signIn(result)
            }
        },
    },
})
