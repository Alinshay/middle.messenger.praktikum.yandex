import HTTP from '../modules/http-transport/http-transport'

const chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user')

interface IChangeInfo {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    display_name: string
}

export class ProfileAPI {
    public putAvatar(formData: FormData) {
        return chatAPIInstance.put('/profile/avatar', {
            headers: {
                accept: 'application/xml',
            },
            data: formData,
        })
    }

    public changePassword(oldPassword: string, newPassword: string) {
        return chatAPIInstance.put('/password', {
            headers: {
                'content-type': 'application/json',
            },
            data: { oldPassword, newPassword },
        })
    }

    public changeInfo(data: IChangeInfo) {
        return chatAPIInstance.put('/profile', {
            headers: {
                'content-type': 'application/json',
            },
            data,
        })
    }
}

export default new ProfileAPI()
