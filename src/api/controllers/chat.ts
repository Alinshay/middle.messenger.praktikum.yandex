import ChatAPI from '../chat-api'
import { messageList } from '../../pages/chat'
import { parseMessages } from '../../utils/parsers/parseMessages'
import { parseChatList } from '../../utils/parsers/parseChatList'
import store from '../../modules/store'
import { getChatId, getProfileId } from '../../utils/utils'

class ChatController {
    public getChats() {
        return ChatAPI.getChats()
            .then(({ response }) => {
                store.set('chatList', parseChatList(JSON.parse(response)))
            })
    }

    public createChat(title: string) {
        ChatAPI.createChat(title)
            .then(() => this.getChats())
    }

    public addUserToChat(chatId: number, userName: string) {
        return ChatAPI.addUserToChat(chatId, userName)
    }

    public deleteUserFromChat(chatId: number, userName: string) {
        return ChatAPI.deleteUserFromChat(chatId, userName)
    }

    public socket: WebSocket | undefined

    public useSocket() {
        const chatId : number | undefined = getChatId()
        if (chatId) {
            ChatAPI.getToken(chatId)
                .then(({ response }) => {
                    const { token } = JSON.parse(response as string)
                    const userId : number | undefined = getProfileId()
                    if (userId) {
                        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)
                        this.socket.addEventListener('open', () => {
                            (this.socket as WebSocket).send(JSON.stringify({
                                content: '0',
                                type: 'get old',
                            }))
                        })

                        this.socket.addEventListener('message', (event: MessageEvent) => {
                            if (Array.isArray(JSON.parse(event.data))) {
                                messageList.setProps({
                                    data: parseMessages(JSON.parse(event.data)),
                                })
                                messageList.getContent().scrollTop = messageList.getContent().scrollHeight
                            } else {
                                (this.socket as WebSocket).send(JSON.stringify({
                                    content: '0',
                                    type: 'get old',
                                }))
                            }
                        })
                    }
                })
        }
    }
}

export default new ChatController()
