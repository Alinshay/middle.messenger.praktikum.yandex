import HTTP from '../modules/http-transport/http-transport'

const chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats')

export class ChatAPI {
    public getChats() {
        return chatAPIInstance.get('/', {
            headers: {
                'content-type': 'application/json',
            },
            data: { limit: 30 },
        })
    }

    public createChat(title: string) {
        return chatAPIInstance.post('/', {
            headers: {
                'content-type': 'application/json',
            },
            data: { title },
        })
    }

    public addUserToChat(chatId: number, userName: string) {
        return chatAPIInstance.put('/users', {
            headers: {
                'content-type': 'application/json',
            },
            data: { chatId, users: [userName] },
        })
    }

    public getChatUsers(chatId: string) {
        return chatAPIInstance.get(`/${chatId}/users`, {})
    }

    public deleteUserFromChat(chatId: number, userName: string) {
        return chatAPIInstance.delete('/users', {
            headers: {
                'content-type': 'application/json',
            },
            data: { chatId, users: [userName] },
        })
    }

    public getToken(chatId: number) {
        return chatAPIInstance.post(`/token/${chatId}`)
    }
}

export default new ChatAPI()
