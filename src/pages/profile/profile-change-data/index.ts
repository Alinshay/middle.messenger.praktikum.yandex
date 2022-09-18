import Input from '../../../components/input/Input'
import { resetValidation, validation } from '../../../utils/validation'
import Button from '../../../components/button/Button'
import Table from '../../../components/table/Table'
import {
    emailRegexp,
    loginRegexp,
    nameRegexp,
    phoneRegexp,
} from '../../../utils/regexp'
import { router } from '../../../index'
import UserController from '../../../api/controllers/profile'

import ChangeDataForm from './ProfileChangeData'

const emailInput = new Input({
    attr: {
        name: 'email',
        value: '',
    },
    events: {
        focus: () => {
            validation(emailInput.getContent() as HTMLInputElement, emailRegexp)
        },
        blur: () => {
            validation(emailInput.getContent() as HTMLInputElement, emailRegexp)
        },
        input: () => {
            resetValidation(emailInput.getContent())
        },
    },
})

const loginInput = new Input({
    attr: {
        name: 'login',
        value: '',
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

const firstNameInput = new Input({
    attr: {
        name: 'first_name',
        value: '',
    },
    events: {
        focus: () => {
            validation(firstNameInput.getContent() as HTMLInputElement, nameRegexp)
        },
        blur: () => {
            validation(firstNameInput.getContent() as HTMLInputElement, nameRegexp)
        },
        input: () => {
            resetValidation(firstNameInput.getContent())
        },
    },
})

const lastNameInput = new Input({
    attr: {
        name: 'second_name',
        value: '',
    },
    events: {
        focus: () => {
            validation(lastNameInput.getContent() as HTMLInputElement, nameRegexp)
        },
        blur: () => {
            validation(lastNameInput.getContent() as HTMLInputElement, nameRegexp)
        },
        input: () => {
            resetValidation(lastNameInput.getContent())
        },
    },
})

const phoneNumberInput = new Input({
    attr: {
        name: 'phone',
        value: '',
    },
    events: {
        focus: () => {
            validation(phoneNumberInput.getContent() as HTMLInputElement, phoneRegexp)
        },
        blur: () => {
            validation(phoneNumberInput.getContent() as HTMLInputElement, phoneRegexp)
        },
        input: () => {
            resetValidation(phoneNumberInput.getContent())
        },
    },
})

const saveButton = new Button({
    text: 'Save',
    attr: {
        class: 'button_main',
    },
})

const table = new Table({
    mode: 'data',
    emailInput,
    loginInput,
    firstNameInput,
    lastNameInput,
    phoneNumberInput,
})

export default new ChangeDataForm({
    table,
    saveButton,
    events: {
        submit: (event) => {
            event.preventDefault()

            const isValid = validation(emailInput.getContent() as HTMLInputElement, emailRegexp)
                && validation(loginInput.getContent() as HTMLInputElement, loginRegexp)
                && validation(firstNameInput.getContent() as HTMLInputElement, nameRegexp)
                && validation(lastNameInput.getContent() as HTMLInputElement, nameRegexp)
                && validation(phoneNumberInput.getContent() as HTMLInputElement, phoneRegexp)

            const result = {
                email: (emailInput.getContent() as HTMLInputElement).value,
                login: (loginInput.getContent() as HTMLInputElement).value,
                first_name: (firstNameInput.getContent() as HTMLInputElement).value,
                second_name: (lastNameInput.getContent() as HTMLInputElement).value,
                phone: (phoneNumberInput.getContent() as HTMLInputElement).value,
                display_name: '',
            }

            if (isValid) {
                UserController.changeInfo(result)
                    .then(() => {
                        UserController.getProfileInfo()
                        router.go('/settings')
                    })
            }
        },
    },
})
