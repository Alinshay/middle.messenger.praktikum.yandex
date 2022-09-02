import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import TextWithLink from '../../components/text-with-link/TextWithLink'
import Input from '../../components/input/Input'
import { validation, resetValidation } from '../../utils/validation'
import {
    emailRegexp,
    loginRegexp,
    nameRegexp,
    passwordRegexp,
    phoneRegexp,
} from '../../utils/regexp'
import { router } from '../../index'
import AuthController from '../../api/controllers/auth'

import SignUp from './SignUp'

const title = new Title({
    value: 'Sign Up',
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
            validation(loginInput.getContent(), loginRegexp)
        },
        blur: () => {
            validation(loginInput.getContent(), loginRegexp)
        },
        input: () => {
            resetValidation(loginInput.getContent())
        },
    },
})

const emailInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'Email',
        name: 'email',
    },
    events: {
        focus: () => {
            validation(emailInput.getContent(), emailRegexp)
        },
        blur: () => {
            validation(emailInput.getContent(), emailRegexp)
        },
        input: () => {
            resetValidation(emailInput.getContent())
        },
    },
})

const firstNameInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'First name',
        name: 'first_name',
    },
    events: {
        focus: () => {
            validation(firstNameInput.getContent(), nameRegexp)
        },
        blur: () => {
            validation(firstNameInput.getContent(), nameRegexp)
        },
        input: () => {
            resetValidation(firstNameInput.getContent())
        },
    },
})

const secondNameInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'Last name',
        name: 'second_name',
    },
    events: {
        focus: () => {
            validation(secondNameInput.getContent(), nameRegexp)
        },
        blur: () => {
            validation(secondNameInput.getContent(), nameRegexp)
        },
        input: () => {
            resetValidation(secondNameInput.getContent())
        },
    },
})

const phoneNumberInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'Phone number',
        name: 'phone',
    },
    events: {
        focus: () => {
            validation(phoneNumberInput.getContent(), phoneRegexp)
        },
        blur: () => {
            validation(phoneNumberInput.getContent(), phoneRegexp)
        },
        input: () => {
            resetValidation(phoneNumberInput.getContent())
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
            validation(passwordInput.getContent(), passwordRegexp)
        },
        blur: () => {
            validation(passwordInput.getContent(), passwordRegexp)
        },
        input: () => {
            resetValidation(passwordInput.getContent())
        },
    },
})

const repeatPasswordInput = new Input({
    attr: {
        class: 'input',
        placeholder: 'Repeat password',
        name: 'repeat_password',
        type: 'password',
    },
    events: {
        focus: () => {
            if ((passwordInput.getContent() as HTMLInputElement).value
                !== (repeatPasswordInput.getContent() as HTMLInputElement).value) {
                // пароли не совпадают
                passwordInput.getContent().classList.add('error')
                repeatPasswordInput.getContent().classList.add('error')
            }
        },
        blur: () => {
            if ((passwordInput.getContent() as HTMLInputElement).value
                !== (repeatPasswordInput.getContent() as HTMLInputElement).value) {
                // пароли не совпадают
                passwordInput.getContent().classList.add('error')
                repeatPasswordInput.getContent().classList.add('error')
            }
        },
        input: () => {
            resetValidation(passwordInput.getContent())
            resetValidation(repeatPasswordInput.getContent())
        },
    },
})

const button = new Button({
    text: 'Submit',
    attr: {
        class: 'button_main',
    },
})

const buttonLink = new TextWithLink({
    text: 'Already Have An Account?',
    linkText: 'Sign Up',
    attr: {
        class: 'link',
    },
    events: {
        click: (e) => {
            e.preventDefault()
            router.go('/')
        },
    },
})

export default new SignUp({
    attr: {
        class: 'page',
    },
    title,
    emailInput,
    loginInput,
    firstNameInput,
    secondNameInput,
    phoneNumberInput,
    passwordInput,
    repeatPasswordInput,
    button,
    buttonLink,
    events: {
        submit: (event) => {
            event.preventDefault()
            const isValid = validation(loginInput.getContent(), loginRegexp)
                && validation(emailInput.getContent(), emailRegexp)
                && validation(firstNameInput.getContent(), nameRegexp)
                && validation(secondNameInput.getContent(), nameRegexp)
                && validation(phoneNumberInput.getContent(), phoneRegexp)
                && validation(passwordInput.getContent(), passwordRegexp)
                && (passwordInput.getContent() as HTMLInputElement).value
                === (repeatPasswordInput.getContent() as HTMLInputElement).value

            const result = {
                email: (emailInput.getContent() as HTMLInputElement).value,
                login: (loginInput.getContent() as HTMLInputElement).value,
                first_name: (firstNameInput.getContent() as HTMLInputElement).value,
                second_name: (secondNameInput.getContent() as HTMLInputElement).value,
                phone: (phoneNumberInput.getContent() as HTMLInputElement).value,
                password: (passwordInput.getContent() as HTMLInputElement).value,
            }
            if (isValid) {
                AuthController.signUp(result)
            }
        },
    },
})
