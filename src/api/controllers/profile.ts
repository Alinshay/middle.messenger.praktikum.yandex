import ProfileApi from '../profile-api'
import AuthAPI from '../auth-api'
import store from '../../modules/store'

interface IChangeInfo {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    display_name: string
}

class UserController {
    public getProfileInfo() {
        return AuthAPI.getProfileInfo()
            .then(({ response }) => store.set('profile', JSON.parse(response)))
    }

    public setAvatar(formData: FormData) {
        return ProfileApi.putAvatar(formData)
            .then(({ response }) => store.set('profile', JSON.parse(response)))
    }

    public changePassword(oldPassword: string, newPassword: string) {
        return ProfileApi.changePassword(oldPassword, newPassword)
            .then(({ response }) => JSON.parse(response))
    }

    public changeInfo(data: IChangeInfo) {
        return ProfileApi.changeInfo(data)
            .then(({ response }) => JSON.parse(response))
    }
}

export default new UserController()
