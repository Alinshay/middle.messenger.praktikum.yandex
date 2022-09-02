import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'

import HTTP from '../http-transport'

describe('HTTPTransport', () => {
    beforeEach(() => {
        const dom = new JSDOM(
            '<html></html>',
            { url: 'http://localhost/'},
        )
        global.window = dom.window
        global.document = dom.window.document
        global.XMLHttpRequest = sinon.useFakeXMLHttpRequest()
        const requests = global.XMLHttpRequest.requests = []

        global.XMLHttpRequest.onCreate = function (xhr: XMLHttpRequest) {
            requests.push(xhr)
        }
    })

    it('GET request', () => {
        const chatAPIInstance = new HTTP()

        chatAPIInstance.get('https://sample-url.com', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })

        expect(global.XMLHttpRequest.requests[0].method).to.eq('GET')
        expect(global.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com?')
        expect(global.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(global.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('GET request with timeout', () => {
        const chatAPIInstance = new HTTP()

        chatAPIInstance.get('https://sample-url.com', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            timeout: 3150,
        })

        expect(global.XMLHttpRequest.requests[0].timeout).to.eq(3150)
    })

    it('GET request with params', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.get('https://sample-url.com', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            data: { a: 1 },
        })

        expect(global.XMLHttpRequest.requests[0].method).to.eq('GET')
        expect(global.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com?a=1')
        expect(global.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(global.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('POST request', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.post('https://sample-url.com', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: { a: 1 },
        })

        expect(global.XMLHttpRequest.requests[0].method).to.eq('POST')
        expect(global.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com')
        expect(global.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(global.XMLHttpRequest.requests[0].requestBody.a).to.eq(1)
        expect(global.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('PUT request', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.put('https://sample-url.com', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            data: { b: 3 },
        })

        expect(global.XMLHttpRequest.requests[0].method).to.eq('PUT')
        expect(global.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com')
        expect(global.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(global.XMLHttpRequest.requests[0].requestBody.b).to.eq(3)
        expect(global.XMLHttpRequest.requests.length).to.eq(1)
    })

    it('DELETE request', () => {
        const chatAPIInstance = new HTTP()
        chatAPIInstance.delete('https://sample-url.com', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            data: { c: 4 },
        })

        expect(global.XMLHttpRequest.requests[0].method).to.eq('DELETE')
        expect(global.XMLHttpRequest.requests[0].url).to.eq('https://sample-url.com')
        expect(global.XMLHttpRequest.requests[0].withCredentials).to.eq(true)
        expect(global.XMLHttpRequest.requests[0].requestBody.c).to.eq(4)
        expect(global.XMLHttpRequest.requests.length).to.eq(1)
    })
})
