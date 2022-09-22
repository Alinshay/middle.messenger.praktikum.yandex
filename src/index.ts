import { Router } from './modules/router/router'
import './helpers'
import SignIn from './pages/sing-in/index'
import SignUp from './pages/sign-up'
import Chat from './pages/chat'
import ErrorPage from './pages/error-page'
import {
    ProfileChangeDataPage,
    ProfileChangePasswordPage,
    ProfileInfoPage,
} from './pages/profile'
import ProfileController from './api/controllers/profile'

export const router = new Router()
ProfileController.getProfileInfo()
    .then(() => {
        router
            .use('/settings', ProfileInfoPage)
            .use('/settings-info', ProfileChangeDataPage)
            .use('/settings-password', ProfileChangePasswordPage)
            .use('/messenger', Chat)
            .use('/', SignIn)
            .use('/signup', SignUp)
            .use('*', ErrorPage)
            .start()
    })
