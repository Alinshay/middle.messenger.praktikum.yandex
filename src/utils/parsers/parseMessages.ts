import { getProfileId } from '../utils'

export const parseMessages = (array: Record<string, any>) => array.reverse().reduce((init: Record<string, any>, elem: Record<string, any>) => {
    const date = new Date(elem.time).toLocaleDateString()

    const userId = getProfileId()
    if (elem.user_id === userId) {
        // eslint-disable-next-line no-param-reassign
        elem.whose = 'own'
    }
    // eslint-disable-next-line no-param-reassign
    elem.time = new Date(elem.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    if (!init.find((item: Record<string, any>) => item.date === date)) {
        init.push({ date, messages: [elem] })
    } else {
        init.find((item: Record<string, any>) => item.date === date).messages.push(elem)
    }

    return init
}, [])
