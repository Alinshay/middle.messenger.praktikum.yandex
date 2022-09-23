import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'

import HTTP from '../http-transport'

describe('HTTPTransport', () => {
    const globalObj: any = global

    beforeEach(() => {
        const dom = new JSDOM(
            '<html lang="ru"></html>',
            { url: 'http://localhost/'},
        )

        globalObj.window = dom.window
        globalObj.document = dom.window.document
        globalObj.XMLHttpRequest = sinon.useFakeXMLHttpRequest()
        const requests = globalObj.XMLHttpRequest.requests = []

        globalObj.XMLHttpRequest.onCreate = function (xhr: XMLHttpRequest) {
            requests.push(xhr)
        }
    })

    it('GET request', () => {
        const chatAPIInstance = new HTTP()

        chatAPIInstance.get('https://sample-url.com', {})

        expect(globalObj.XMLHttpRequest.requests[0].method).to.eq('GET')
        expect(globalObj.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com?')
        expect(globalObj.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(globalObj.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('GET request with timeout', () => {
        const chatAPIInstance = new HTTP()

        chatAPIInstance.get('https://sample-url.com', {
            timeout: 3150,
        })

        expect(globalObj.XMLHttpRequest.requests[0].timeout).to.eq(3150)
    })

    it('GET request with params', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.get('https://sample-url.com', {
            headers: {
                'content-type': 'application/json',
            },
            data: { a: 1 },
        })

        expect(globalObj.XMLHttpRequest.requests[0].method).to.eq('GET')
        expect(globalObj.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com?a=1')
        expect(globalObj.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(globalObj.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('POST request', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.post('https://sample-url.com', {
            headers: {
                'content-type': 'application/json',
            },
            data: { a: 1 },
        })

        expect(globalObj.XMLHttpRequest.requests[0].method).to.eq('POST')
        expect(globalObj.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com')
        expect(globalObj.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(globalObj.XMLHttpRequest.requests[0].requestBody).to.eq('{"a":1}')
        expect(globalObj.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('PUT request', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.put('https://sample-url.com', {
            headers: {
                'content-type': 'application/json',
            },
            data: { b: 3 },
        })

        expect(globalObj.XMLHttpRequest.requests[0].method).to.eq('PUT')
        expect(globalObj.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com')
        expect(globalObj.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(globalObj.XMLHttpRequest.requests[0].requestBody.b).to.eq(3)
        expect(globalObj.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('DELETE request', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.delete('https://sample-url.com', {
            headers: {
                'content-type': 'application/json',
            },
            data: { c: 4 },
        })

        expect(globalObj.XMLHttpRequest.requests[0].method).to.eq('DELETE')
        expect(globalObj.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com')
        expect(globalObj.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(globalObj.XMLHttpRequest.requests[0].requestBody).to.eq('{"c":4}')
        expect(globalObj.XMLHttpRequest.requests.length).to.eq(1)
    })
})
