import Block from '../../../modules/block/block'
import type Title from '../../../components/title/Title'
import type ButtonFullScreen from '../../../components/button-full-screen/ButtonFullScreen'
import { AvatarLg } from '../../../components/avatar-lg/AvatarLg'
import Popup from '../../../components/popup/Popup'

import tpl from './tpl.hbs'
import './style.css'

interface IProfileLayoutProps {
    profileTitleName?: Title
    buttonFullScreen: ButtonFullScreen
    content: Block
    avatarLg: AvatarLg
    popup?: Popup
    attr?: {
        class?: string
    }
}

export default class ProfileLayout extends Block {
    constructor(props: IProfileLayoutProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            buttonFullScreen: this.props.buttonFullScreen,
            avatarLg: this.props.avatarLg,
            profileTitleName: this.props.profileTitleName,
            content: this.props.content,
            popup: this.props.popup,
        })
    }
}
