import HTTP from '../modules/http-transport/http-transport'

const chatAPIInstance = new HTTP()

export class ProfileAPI {
    public request() {
        return chatAPIInstance.get('https://ya-praktikum.tech/api/v2/auth/user', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    public putAvatar(formData: FormData) {
        return chatAPIInstance.put('https://ya-praktikum.tech/api/v2/user/profile/avatar', {
            method: 'PUT',
            headers: {
                accept: 'application/xml',
            },
            data: formData,
        })
    }

    public changePassword(oldPassword: string, newPassword: string) {
        return chatAPIInstance.put('https://ya-praktikum.tech/api/v2/user/password', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({ oldPassword, newPassword }),
        })
    }

    public changeInfo(data: any) {
        return chatAPIInstance.put('https://ya-praktikum.tech/api/v2/user/profile', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify(data),
        })
    }
}

export default new ProfileAPI()
