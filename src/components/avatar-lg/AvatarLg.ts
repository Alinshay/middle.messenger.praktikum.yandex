import Block from '../../modules/block/block'
import { connect } from '../../utils/connect'
import { IState } from '../../modules/store'

import tpl from './tpl.hbs'
import './style.css'

interface IAvatarLgProps {
    src?: string
    imgSrc?: string
    events?: { click: (event: MouseEvent) => void }
}

export class AvatarLg extends Block {
    constructor(props: IAvatarLgProps) {
        super('span', props)
    }

    render() {
        return this.compile(tpl, {
            src: this.props.src,
            imgSrc: this.props.imgSrc,
        })
    }
}

function mapStateToProps(state: IState) {
    return {
        src: state?.profile?.avatar,
    }
}

export default connect(AvatarLg as typeof Block, mapStateToProps)
