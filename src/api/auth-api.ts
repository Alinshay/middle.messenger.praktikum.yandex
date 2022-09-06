import HTTP from '../modules/http-transport/http-transport'

const chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/auth')

interface ISignIn {
    login: string
    password: string
}

interface ISignUp {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    password: string
}

export class AuthAPI {
    public getProfileInfo() {
        return chatAPIInstance.get('/user', {
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    public signIn(data: ISignIn) {
        return chatAPIInstance.post('/signin', {
            headers: {
                'content-type': 'application/json',
            },
            data,
        })
    }

    public signUp(data: ISignUp) {
        return chatAPIInstance.post('/signup', {
            headers: {
                'content-type': 'application/json',
            },
            data,
        })
    }

    public logout() {
        return chatAPIInstance.post('/logout')
    }
}

export default new AuthAPI()
