const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

function queryStringify(data: Record<string, string>) {
    const keys = Object.keys(data)
    return keys.reduce((result: string, key: string, index: number) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?')
}

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface optionsType {
    method: Methods
    headers: Record<string, string>
    data?: Record<string, any>|string
    timeout?: number
}

export default class HTTPTransport {
    get = (url: string, options: optionsType) : Promise<unknown> => this.request(url, { ...options, method: METHODS.GET as Methods })

    put = (url: string, options: optionsType) : Promise<unknown> => this.request(url, { ...options, method: METHODS.PUT as Methods })

    post = (url: string, options: optionsType) : Promise<unknown> => this.request(url, { ...options, method: METHODS.POST as Methods })

    delete = (url: string, options: optionsType) => this.request(url, { ...options, method: METHODS.DELETE as Methods })

    request = (url: string, options: optionsType) : Promise<unknown> => {
        const {
            method, headers, data, timeout = 5000,
        } = options

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No method'))
                return
            }

            const xhr = new XMLHttpRequest()
            // eslint-disable-next-line no-unused-expressions
            method === METHODS.GET ? xhr.open(method, `${url}${queryStringify(data as Record<string, any> || {})}`) : xhr.open(method, url)
            xhr.withCredentials = true

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key])
            })

            xhr.onload = () => {
                resolve(xhr)
            }

            xhr.onabort = reject
            xhr.onerror = reject

            xhr.timeout = timeout
            xhr.ontimeout = reject

            if (method === METHODS.GET || !data) {
                xhr.send()
            } else if (method === METHODS.PUT) {
                xhr.send(data as FormData)
            } else {
                xhr.send(data as string)
            }
        })
    }
}
