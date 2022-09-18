import { IChat } from '../../modules/store'

const isToday = (date: Date) => {
    const now = new Date()
    return now.getDate() === date.getDate()
}

export const parseChatList = (array: IChat[]) => {
    if (!Array.isArray(array)) {
        return []
    }
    const result = array.sort((a: IChat, b: IChat) => {
        if (a?.last_message?.time && b?.last_message?.time) {
            return new Date(b.last_message.time).getTime() - new Date(a.last_message.time).getTime()
        }
        if (a?.last_message?.time && !b?.last_message?.time) {
            return -1
        }
        return 0
    })

    result.forEach((item: IChat) => {
        if (item?.last_message?.time) {
            const time = new Date(item.last_message.time)
            if (isToday(time)) {
                // eslint-disable-next-line no-param-reassign
                item.time = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            } else {
                // eslint-disable-next-line no-param-reassign
                item.time = time.toLocaleDateString()
            }
        }
    })
    return result
}
