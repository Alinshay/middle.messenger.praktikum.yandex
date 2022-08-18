import Input from '../../../components/input/Input'
import { resetValidation, validation } from '../../../utils/validation'
import Button from '../../../components/button/Button'
import ChangePasswordForm from '../profile-change-password/ProfileLayout'
import Table from '../../../components/table/Table'
import { passwordRegexp } from '../../../utils/regexp'

const oldPasswordInput = new Input({
    attr: {
        name: 'password',
        type: 'password',
    },
    events: {
        focus: () => {
            validation(oldPasswordInput.getContent(), passwordRegexp)
        },
        blur: () => {
            validation(oldPasswordInput.getContent(), passwordRegexp)
        },
        input: () => {
            resetValidation(oldPasswordInput.getContent())
        },
    },
})

const newPasswordInput = new Input({
    attr: {
        name: 'password',
        type: 'password',
    },
    events: {
        focus: () => {
            validation(newPasswordInput.getContent(), passwordRegexp)
        },
        blur: () => {
            validation(newPasswordInput.getContent(), passwordRegexp)
        },
        input: () => {
            resetValidation(newPasswordInput.getContent())
        },
    },
})

const repeatPasswordInput = new Input({
    attr: {
        name: 'repeat_password',
        type: 'password',
    },
    events: {
        focus: () => {
            if ((newPasswordInput.getContent() as HTMLInputElement).value
                !== (repeatPasswordInput.getContent() as HTMLInputElement).value) {
                // пароли не совпадают
                newPasswordInput.getContent().classList.add('error')
                repeatPasswordInput.getContent().classList.add('error')
            }
        },
        blur: () => {
            if ((newPasswordInput.getContent() as HTMLInputElement).value
                !== (repeatPasswordInput.getContent() as HTMLInputElement).value) {
                newPasswordInput.getContent().classList.add('error')
                repeatPasswordInput.getContent().classList.add('error')
            }
        },
        input: () => {
            resetValidation(newPasswordInput.getContent())
            resetValidation(repeatPasswordInput.getContent())
        },
    },
})

const button = new Button({
    text: 'Save',
    attr: {
        class: 'button_main',
    },
})

const table = new Table({
    mode: 'password',
    oldPasswordInput,
    newPasswordInput,
    repeatPasswordInput,
})

export default new ChangePasswordForm({
    table,
    button,
    events: {
        submit: (event) => {
            event.preventDefault()

            const isValid = validation(oldPasswordInput.getContent(), passwordRegexp)
                && validation(newPasswordInput.getContent(), passwordRegexp)
                && (newPasswordInput.getContent() as HTMLInputElement).value
                === (repeatPasswordInput.getContent() as HTMLInputElement).value

            const result = {
                old_password: (oldPasswordInput.getContent() as HTMLInputElement).value,
                new_password: (newPasswordInput.getContent() as HTMLInputElement).value,
                repeat_password: (repeatPasswordInput.getContent() as HTMLInputElement).value,
            }
            // eslint-disable-next-line no-console, no-unused-expressions
            if (isValid) console.log(result)
            // eslint-disable-next-line no-console, no-unused-expressions
            console.log('invalid')

            // window.location.pathname = '/profile'
        },
    },

})
