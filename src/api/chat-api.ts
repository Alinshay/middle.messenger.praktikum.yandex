import HTTP from '../modules/http-transport/http-transport'

const chatAPIInstance = new HTTP()

export class ChatAPI {
    getChats() {
        return chatAPIInstance.get('https://ya-praktikum.tech/api/v2/chats', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            data: { limit: 30 },
        })
    }

    public createChat(title: string) {
        return chatAPIInstance.post('https://ya-praktikum.tech/api/v2/chats', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({ title }),
        })
    }

    public addUserToChat(chatId: string, userName: string) {
        return chatAPIInstance.put('https://ya-praktikum.tech/api/v2/chats/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({ chatId, users: [userName] }),
        })
    }

    public getChatUsers(chatId: string) {
        return chatAPIInstance.get(`https://ya-praktikum.tech/api/v2/chats/${chatId}/users`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    public deleteUserFromChat(chatId: string, userName: string) {
        return chatAPIInstance.delete('https://ya-praktikum.tech/api/v2/chats/users', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({ chatId, users: [userName] }),
        })
    }

    public getToken(chatId: number) {
        return chatAPIInstance.post(`https://ya-praktikum.tech/api/v2/chats/token/${chatId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        })
    }
}

export default new ChatAPI()
