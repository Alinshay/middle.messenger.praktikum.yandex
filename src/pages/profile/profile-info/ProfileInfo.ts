import Block from '../../../modules/block/block'
import type Button from '../../../components/button/Button'
import type Table from '../../../components/table/Table'

import tpl from './tpl.hbs'

interface IProfileInfoProps {
    profileTable: Table
    changeDataButton: Button
    changePasswordButton: Button
    logoutButton: Button
    attr?: {
        class?: string
    }
}

export default class ProfileInfo extends Block {
    constructor(props: IProfileInfoProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            profileTable: this.props.profileTable,
            changeDataButton: this.props.changeDataButton,
            changePasswordButton: this.props.changePasswordButton,
            logoutButton: this.props.logoutButton,
        })
    }
}
