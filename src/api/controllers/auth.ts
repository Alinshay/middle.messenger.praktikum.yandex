import authApi from '../auth-api'
import store from '../../modules/store'
import { router } from '../../index'

import UserController from './profile'
import ChatController from './chat'

class AuthController {
    public logout() {
        authApi.logout()
            .then(() => store.set('profile', {}))
            .then(() => {
                router.go('/')
            })
    }

    public signIn(data: Record<string, any>) {
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

    public signUp(data: Record<string, any>) {
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
