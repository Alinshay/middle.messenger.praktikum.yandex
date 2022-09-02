import HTTP from '../modules/http-transport/http-transport'

const chatAPIInstance = new HTTP()

export class AuthAPI {
    public signIn(data: Record<string, any>) {
        return chatAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify(data),
        })
    }

    public signUp(data: Record<string, any>) {
        return chatAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify(data),
        })
    }

    public logout() {
        return chatAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/logout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        })
    }
}

export default new AuthAPI()
