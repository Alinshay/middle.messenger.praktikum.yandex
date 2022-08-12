import Block from '../../../modules/block'
import type Title from '../../../components/title/Title'
import type ButtonFullScreen from '../../../components/button-full-screen/ButtonFullScreen'
import type AvatarLg from '../../../components/avatar-lg/AvatarLg'

import tpl from './tpl.hbs'
import './style.css'

interface profileLayoutProps {
    profileTitleName: Title
    buttonFullScreen: ButtonFullScreen
    content: Block
    avatarLg: AvatarLg
    attr?: {
        class?: string
    }
}

export default class ProfileLayout extends Block {
    constructor(props: profileLayoutProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {
            buttonFullScreen: this.props.buttonFullScreen,
            avatarLg: this.props.avatarLg,
            profileTitleName: this.props.profileTitleName,
            content: this.props.content,
        })
    }
}
