import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import { router } from '../../index'

import ErrorPage from './ErrorPage'

const button = new Button({
    text: 'Back',
    attr: {
        class: 'button_main',
    },
    events: {
        click: () => {
            router.goBack()
        },
    },
})

const title = new Title({
    value: '404 PAGE NOT FOUND',
    attr: {
        class: 'title',
    },
})

const titleWithMan = new Title({
    value: '¯\\_(ツ)_/¯',
    attr: {
        class: 'title',
    },
})

export default new ErrorPage({
    title,
    titleWithMan,
    button,
    attr: {
        class: 'page',
    },
})
