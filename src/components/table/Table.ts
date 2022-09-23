import Block from '../../modules/block/block'
import type Input from '../input/Input'

import tpl from './tpl.hbs'
import './style.css'

interface ITableProps {
    mode: 'data' | 'password',
    emailInput?: Input | string
    loginInput?: Input | string
    firstNameInput?: Input | string
    lastNameInput?: Input | string
    phoneNumberInput?: Input | string
    oldPasswordInput?: Input | string
    newPasswordInput?: Input | string
    repeatPasswordInput?: Input | string
    events?: {
        submit?: () => void
    }
}

export default class Table extends Block {
    constructor(props: ITableProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            mode: this.props.mode,
            emailInput: this.props.emailInput,
            loginInput: this.props.loginInput,
            firstNameInput: this.props.firstNameInput,
            lastNameInput: this.props.lastNameInput,
            phoneNumberInput: this.props.phoneNumberInput,
            oldPasswordInput: this.props.oldPasswordInput,
            newPasswordInput: this.props.newPasswordInput,
            repeatPasswordInput: this.props.repeatPasswordInput,
        })
    }
}
