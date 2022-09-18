import authApi from '../auth-api'
import store from '../../modules/store'
import { router } from '../../index'

import UserController from './profile'
import ChatController from './chat'

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

class AuthController {
    public logout() {
        authApi.logout()
            .then(() => store.set('profile', {}))
            .then(() => {
                router.go('/')
            })
    }

    public signIn(data: ISignIn) {
        authApi.signIn(data)
            .then(() => {
                UserController.getProfileInfo()
                    .then(() => {
                        ChatController.getChats()
                            .then(() => {
                                router.go('/messenger')
                            })
                    })
            })
    }

    public signUp(data: ISignUp) {
        authApi.signUp(data)
            .then(() => {
                UserController.getProfileInfo()
                    .then(() => {
                        ChatController.getChats()
                            .then(() => {
                                router.go('/messenger')
                            })
                    })
            })
    }
}

export default new AuthController()
