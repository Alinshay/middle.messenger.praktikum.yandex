import { getProfileId } from '../utils'

interface IMessage {
    chat_id: number
    content: string
    file: null
    id: number
    is_read: boolean
    time: string
    type: string
    user_id: number
    whose?: 'own'
}

interface IParseMessage {
    date: string
    messages: Array<IMessage>
}

export const parseMessages = (array: Array<IMessage>) => array.reverse().reduce((init : IParseMessage[], elem: IMessage) => {
    const date : string = new Date(elem.time).toLocaleDateString()

    const userId : number | undefined = getProfileId()
    if (elem.user_id === userId) {
        // eslint-disable-next-line no-param-reassign
        elem.whose = 'own'
    }
    // eslint-disable-next-line no-param-reassign
    elem.time = new Date(elem.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    if (!init.find((item: IParseMessage) => item.date === date)) {
        init.push({ date, messages: [elem] })
    } else {
        init.find((item: IParseMessage) => item.date === date)?.messages.push(elem)
    }
    return init
}, [])
