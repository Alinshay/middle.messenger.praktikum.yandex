import Block from '../../../modules/block/block'
import type Button from '../../../components/button/Button'
import type Table from '../../../components/table/Table'

import tpl from './tpl.hbs'

interface IChangeDataProps {
    table: Table
    saveButton: Button
    attr?: {
        class?: string
    }
    events?: {
        submit?: (event: MouseEvent) => void
    }
}

export default class ChangeDataForm extends Block {
    constructor(props: IChangeDataProps) {
        super('form', props)
    }

    render() {
        return this.compile(tpl, {
            table: this.props.table,
            saveButton: this.props.saveButton,
        })
    }
}
