import IBlock from '../../modules/block/block'

import tpl from './tpl.hbs'
import './style.css'

interface IButtonProps {
    events?: { click: (event: MouseEvent) => void }
}

export default class ButtonFullScreen extends IBlock {
    constructor(props: IButtonProps) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
