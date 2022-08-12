import render from './utils/renderDOM'
import SignInPage from './pages/sing-in'
import SignUpPage from './pages/sign-up'
import Error404 from './pages/error-page'
import ChatPage from './pages/chat'
import {
    ProfileInfoPage,
    ProfileChangeDataPage,
    ProfileChangePasswordPage,
} from './pages/profile'

switch (window.location.pathname) {
    case '/': render('main', SignInPage); break
    case '/signin': render('main', SignInPage); break
    case '/signup': render('main', SignUpPage); break
    case '/chat': render('main', ChatPage); break
    case '/profile': render('main', ProfileInfoPage); break
    case '/profile/data-edit': render('main', ProfileChangeDataPage); break
    case '/profile/password-edit': render('main', ProfileChangePasswordPage); break
    default: render('main', Error404)
}
