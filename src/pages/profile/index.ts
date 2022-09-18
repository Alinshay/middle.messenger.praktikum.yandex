import ButtonFullScreen from '../../components/button-full-screen/ButtonFullScreen'
import AvatarLg, { AvatarLg as AvatarLgType } from '../../components/avatar-lg/AvatarLg'
import Title from '../../components/title/Title'
import Popup from '../../components/popup/Popup'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import { router } from '../../index'
import UserController from '../../api/controllers/profile'
import store, { StoreEvents } from '../../modules/store'
import { getProfile } from '../../utils/utils'

import ProfileLayout from './profile-layout/ProfileLayout'
import changeDataForm from './profile-change-data'
import changePasswordForm from './profile-change-password'
import profileInfo from './profile-info'

store.on(StoreEvents.Updated, () => {
    profileTitleName.setProps({
        value: getProfile()?.first_name,
    })
})

const popupTitle = new Title({ value: 'SELECT FILE', attr: { class: 'title' } })

const popupButton = new Button({
    text: 'Change',
    attr: {
        class: 'button_main',
    },
})

const popupInput = new Input({
    attr: {
        type: 'file',
        class: 'input-file',
    },
})

export const popup = new Popup({
    title: popupTitle,
    typeOfValue: 'input',
    input: popupInput,
    value: '',
    button: popupButton,
    attr: {
        class: 'background-blur',
    },
    events: {
        click: (event) => {
            const popupContent = document.querySelector('.popup')
            const withinBoundaries = event.composedPath().includes(popupContent as Element)
            if (!withinBoundaries) {
                (popupInput.getContent() as HTMLInputElement).value = ''
                popup.hide()
            }
        },

        submit: (event) => {
            event.preventDefault()
            const formData = new FormData()
            const file: File | null = ((popupInput.getContent() as HTMLInputElement)?.files as FileList)[0]
            if (file) {
                formData.append('avatar', file)
                UserController.setAvatar(formData)
                popup.hide()
            }
        },
    },
})

popup.hide()

const profileTitleName = new Title({
    value: '',
    attr: {
        class: 'title',
    },
})

export const ProfileInfoPage = new ProfileLayout({
    attr: {
        class: 'page',
    },
    buttonFullScreen: new ButtonFullScreen({ events: { click: () => { router.go('/messenger') } } }),
    avatarLg: new AvatarLg({
        events: {
            click: () => {
                popup.show()
            },
        },
        attr: { class: 'avatar-lg__change' },
    }) as AvatarLgType,
    profileTitleName,
    content: profileInfo,
    popup,
})

export const ProfileChangeDataPage = new ProfileLayout({
    attr: {
        class: 'page',
    },
    buttonFullScreen: new ButtonFullScreen({
        events: {
            click: () => {
                router.go('/messenger')
            },
        },
    }),
    avatarLg: new AvatarLg() as AvatarLgType,
    content: changeDataForm,
})

export const ProfileChangePasswordPage = new ProfileLayout({
    attr: {
        class: 'page',
    },
    buttonFullScreen: new ButtonFullScreen({
        events: {
            click: () => {
                router.go('/messenger')
            },
        },
    }),
    avatarLg: new AvatarLg() as AvatarLgType,
    content: changePasswordForm,
})
