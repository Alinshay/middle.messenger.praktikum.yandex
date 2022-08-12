import Input from '../../../components/input/Input'
import { resetValidation, validation } from '../../../utils/validation'
import Button from '../../../components/button/Button'
import Table from '../../../components/table/Table'
import profileInfoData from '../../../stub/profile-info'
import {
    emailRegexp,
    loginRegexp,
    nameRegexp,
    phoneRegexp,
} from '../../../utils/regexp'

import ChangeDataForm from './ProfileChangeData'

const emailInput = new Input({
    attr: {
        name: 'email',
        value: profileInfoData.email,
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

const loginInput = new Input({
    attr: {
        name: 'login',
        value: profileInfoData.login,
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

const firstNameInput = new Input({
    attr: {
        name: 'first_name',
        value: profileInfoData.firstName,
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

const lastNameInput = new Input({
    attr: {
        name: 'second_name',
        value: profileInfoData.lastName,
    },
    events: {
        focus: () => {
            validation(lastNameInput.getContent(), nameRegexp)
        },
        blur: () => {
            validation(lastNameInput.getContent(), nameRegexp)
        },
        input: () => {
            resetValidation(lastNameInput.getContent())
        },
    },
})

const phoneNumberInput = new Input({
    attr: {
        name: 'phone',
        value: profileInfoData.phoneNumber,
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

const displayNameInput = new Input({
    attr: {
        name: 'display_name',
        value: profileInfoData.displayName,
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
    displayNameInput,
    phoneNumberInput,
})

export default new ChangeDataForm({
    table,
    saveButton,
    events: {
        submit: (event) => {
            event.preventDefault()

            const isValid = validation(emailInput.getContent(), emailRegexp)
                && validation(loginInput.getContent(), loginRegexp)
                && validation(firstNameInput.getContent(), nameRegexp)
                && validation(lastNameInput.getContent(), nameRegexp)
                && validation(phoneNumberInput.getContent(), phoneRegexp)

            const result = {
                email: (emailInput.getContent() as HTMLInputElement).value,
                login: (loginInput.getContent() as HTMLInputElement).value,
                first_name: (firstNameInput.getContent() as HTMLInputElement).value,
                second_name: (lastNameInput.getContent() as HTMLInputElement).value,
                display_name: (displayNameInput.getContent() as HTMLInputElement).value,
                phone: (phoneNumberInput.getContent() as HTMLInputElement).value,
            }
            // eslint-disable-next-line no-console, no-unused-expressions
            if (isValid) console.log(result)
            // eslint-disable-next-line no-console, no-unused-expressions
            console.log('invalid')
            // window.location.pathname = '/profile'
        },
    },
})
