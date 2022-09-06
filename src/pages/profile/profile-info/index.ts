import ButtonLink from '../../../components/button-link/ButtonLink'
import Table from '../../../components/table/Table'
import store, { IProfile, StoreEvents } from '../../../modules/store'
import { router } from '../../../index'
import AuthController from '../../../api/controllers/auth'
import { getProfile } from '../../../utils/utils'

import ProfileInfo from './ProfileInfo'

const changeDataButton = new ButtonLink({
    title: 'Change data',
    attr: {
        class: 'button__link',
    },
    events: {
        click: () => {
            router.go('/settings-info')
        },
    },
})

const changePasswordButton = new ButtonLink({
    title: 'Change password',
    attr: {
        class: 'button__link',
    },
    events: {
        click: () => {
            router.go('/settings-password')
        },
    },
})

const logoutButton = new ButtonLink({
    title: 'Logout',
    attr: {
        class: 'button__link logout',
    },

    events: {
        click: () => {
            AuthController.logout()
        },
    },
})

const profileTable = new Table({
    mode: 'data',
    emailInput: '',
    loginInput: '',
    firstNameInput: '',
    lastNameInput: '',
    phoneNumberInput: '',
})

export default new ProfileInfo({
    profileTable,
    changeDataButton,
    changePasswordButton,
    logoutButton,
})

store.on(StoreEvents.Updated, () => {
    const profileInfo : IProfile | undefined = getProfile()
    if (profileInfo) {
        profileTable.setProps({
            emailInput: profileInfo.email,
            loginInput: profileInfo.login,
            firstNameInput: profileInfo.first_name,
            lastNameInput: profileInfo.second_name,
            displayNameInput: profileInfo.display_name,
            phoneNumberInput: profileInfo.phone,
        })
    }
})
