import Block from '../../modules/block'

import tpl from './tpl.hbs'
import './style.css'

interface AvatarLgProps {
    src?: string,
    imgSrc?: string
}

export default class AvatarLg extends Block {
    constructor(props: AvatarLgProps) {
        super('span', props)
    }

    render() {
        return this.compile(tpl, {
            src: this.props.src,
            imgSrc: this.props.imgSrc,
        })
    }
}
