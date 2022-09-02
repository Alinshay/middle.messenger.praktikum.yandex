import ProfileApi from '../profile-api'
import store from '../../modules/store'

class UserController {
    public getProfileInfo() {
        return ProfileApi.request()
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

    public changeInfo(data: any) {
        return ProfileApi.changeInfo(data)
            .then(({ response }) => JSON.parse(response))
    }
}

export default new UserController()
