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

interface optionsType {
    method: string
    headers: Record<string, string>
    data?: Record<string, any>
    timeout?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class HTTPTransport {
    get = (url: string, options: optionsType) => {
        this.request(url, { ...options, method: METHODS.GET }, options.timeout)
    }

    put = (url: string, options: optionsType) => {
        this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
    }

    post = (url: string, options: optionsType) => {
        this.request(url, { ...options, method: METHODS.POST }, options.timeout)
    }

    delete = (url: string, options: optionsType) => {
        this.request(
            url,
            { ...options, method: METHODS.DELETE },
            options.timeout,
        )
    }

    request = (url: string, options: optionsType, timeout = 5000) => {
        const { method, headers, data } = options

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No method'))
                return
            }

            const xhr = new XMLHttpRequest()
            // eslint-disable-next-line no-unused-expressions
            method === METHODS.GET ? xhr.open(method, `${url}${queryStringify(data || {})}`) : xhr.open(method, url)

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
            } else {
                xhr.send(data as Document)
            }
        })
    }
}
