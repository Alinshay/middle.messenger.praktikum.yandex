import Block from '../../../modules/block'
import type Table from '../../../components/table/Table'
import type Button from '../../../components/button/Button'

import tpl from './tpl.hbs'

interface changePasswordProps {
    table: Table
    button: Button
    attr?: {
        class?: string
    }
    events?: {
        submit?: (event: MouseEvent) => void
    }
}

export default class ChangePasswordForm extends Block {
    constructor(props: changePasswordProps) {
        super('form', props)
    }

    render() {
        return this.compile(tpl, {
            table: this.props.table,
            button: this.props.button,
        })
    }
}
