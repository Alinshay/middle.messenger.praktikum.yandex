import ButtonFullScreen from '../../components/button-full-screen/ButtonFullScreen'
import AvatarLg from '../../components/avatar-lg/AvatarLg'
import Title from '../../components/title/Title'

import ProfileLayout from './profile-layout/ProfileLayout'
import changeDataForm from './profile-change-data'
import changePasswordForm from './profile-change-password'
import profileInfo from './profile-info'

const buttonFullScreen = new ButtonFullScreen({
    chatRef: '/chat',
})
const avatarLg = new AvatarLg({})

const profileTitleName = new Title({
    value: 'Name',
    attr: {
        class: 'title',
    },
})

export const ProfileInfoPage = new ProfileLayout({
    attr: {
        class: 'page',
    },
    buttonFullScreen,
    avatarLg,
    profileTitleName,
    content: profileInfo,
})

export const ProfileChangeDataPage = new ProfileLayout({
    attr: {
        class: 'page',
    },
    buttonFullScreen,
    avatarLg,
    profileTitleName,
    content: changeDataForm,
})

export const ProfileChangePasswordPage = new ProfileLayout({
    attr: {
        class: 'page',
    },
    buttonFullScreen,
    avatarLg,
    profileTitleName,
    content: changePasswordForm,
})
