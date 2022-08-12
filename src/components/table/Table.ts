import Handlebars from 'handlebars'

import Block from '../../modules/block'
import type Input from '../input/Input'

import tpl from './tpl.hbs'
import './style.css'

interface tableProps {
    mode: 'data' | 'password',
    emailInput?: Input | string
    loginInput?: Input | string
    firstNameInput?: Input | string
    lastNameInput?: Input | string
    displayNameInput?: Input | string
    phoneNumberInput?: Input | string
    oldPasswordInput?: Input | string
    newPasswordInput?: Input | string
    repeatPasswordInput?: Input | string
    events?: {
        submit?: () => void
    }
}

export default class Table extends Block {
    constructor(props: tableProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            mode: this.props.mode,
            emailInput: this.props.emailInput,
            loginInput: this.props.loginInput,
            firstNameInput: this.props.firstNameInput,
            lastNameInput: this.props.lastNameInput,
            displayNameInput: this.props.displayNameInput,
            phoneNumberInput: this.props.phoneNumberInput,
            oldPasswordInput: this.props.oldPasswordInput,
            newPasswordInput: this.props.newPasswordInput,
            repeatPasswordInput: this.props.repeatPasswordInput,
        })
    }
}

Handlebars.registerHelper('isData', (value) => value === 'data')

Handlebars.registerHelper('isPassword', (value) => value === 'password')
