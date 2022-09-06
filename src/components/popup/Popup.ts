import Handlebars from 'handlebars'

import Block from '../../modules/block/block'
import type Title from '../title/Title'
import type Button from '../button/Button'
import type Input from '../input/Input'
import type ButtonLink from '../button-link/ButtonLink'

import tpl from './tpl.hbs'
import './style.css'

interface IPopupProps {
    title: Title
    typeOfValue: string
    button: Button
    value?: string
    errorText?: string
    input?: Input
    buttonLink?: ButtonLink
    attr: {
        class: string
    },
    events?: {
        click?: (event: MouseEvent) => void
        submit?: (event: MouseEvent) => void
    }
}

export default class Popup extends Block {
    constructor(props: IPopupProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            title: this.props.title,
            typeOfValue: this.props.typeOfValue,
            input: this.props.input,
            buttonLink: this.props.buttonLink,
            value: this.props.value,
            button: this.props.button,
            errorText: this.props.errorText,
        })
    }
}

Handlebars.registerHelper('isInput', (value) => value === 'input')

Handlebars.registerHelper('isText', (value) => value === 'text')

Handlebars.registerHelper('isButton', (value) => value === 'button')
