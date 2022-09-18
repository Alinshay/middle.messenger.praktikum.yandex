import Input from '../../../components/input/Input'
import { resetValidation, validation } from '../../../utils/validation'
import Button from '../../../components/button/Button'
import ChangePasswordForm from '../profile-change-password/ProfileLayout'
import Table from '../../../components/table/Table'
import { passwordRegexp } from '../../../utils/regexp'
import { router } from '../../../index'
import UserController from '../../../api/controllers/profile'

const oldPasswordInput = new Input({
    attr: {
        name: 'password',
        type: 'password',
    },
    events: {
        focus: () => {
            validation(oldPasswordInput.getContent() as HTMLInputElement, passwordRegexp)
        },
        blur: () => {
            validation(oldPasswordInput.getContent() as HTMLInputElement, passwordRegexp)
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
            validation(newPasswordInput.getContent() as HTMLInputElement, passwordRegexp)
        },
        blur: () => {
            validation(newPasswordInput.getContent() as HTMLInputElement, passwordRegexp)
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

            const oldPassword : string = (oldPasswordInput.getContent() as HTMLInputElement).value
            const newPassword : string = (newPasswordInput.getContent() as HTMLInputElement).value
            const repeatPassword : string = (repeatPasswordInput.getContent() as HTMLInputElement).value

            const isValid = validation(oldPasswordInput.getContent() as HTMLInputElement, passwordRegexp)
                && validation(newPasswordInput.getContent() as HTMLInputElement, passwordRegexp)
                && newPassword === repeatPassword

            if (isValid) {
                UserController.changePassword(oldPassword, newPassword)
                    .then((response) => {
                        if (response?.reason) {
                            (oldPasswordInput.getContent() as HTMLInputElement).classList.add('error')
                        } else {
                            (oldPasswordInput.getContent() as HTMLInputElement).value = '' as string
                            (newPasswordInput.getContent() as HTMLInputElement).value = '' as string
                            (repeatPasswordInput.getContent() as HTMLInputElement).value = '' as string
                            oldPasswordInput.getContent().classList.remove('error')
                            router.go('/settings')
                        }
                    })
            }
        },
    },

})
