import ButtonLink from '../../../components/button-link/ButtonLink'
import Table from '../../../components/table/Table'
import profileInfoData from '../../../stub/profile-info'

import ProfileInfo from './ProfileInfo'

const changeDataButton = new ButtonLink({
    title: 'Change data',
    attr: {
        class: 'button__link',
        href: '/profile/data-edit',
    },
})

const changePasswordButton = new ButtonLink({
    title: 'Change password',
    attr: {
        class: 'button__link',
        href: '/profile/password-edit',
    },
})

const logoutButton = new ButtonLink({
    title: 'Logout',
    attr: {
        class: 'button__link logout',
        href: '/signin',
    },
})

const profileTable = new Table({
    mode: 'data',
    emailInput: profileInfoData.email,
    loginInput: profileInfoData.login,
    firstNameInput: profileInfoData.firstName,
    lastNameInput: profileInfoData.lastName,
    displayNameInput: profileInfoData.displayName,
    phoneNumberInput: profileInfoData.phoneNumber,
})

export default new ProfileInfo({
    profileTable,
    changeDataButton,
    changePasswordButton,
    logoutButton,
})
