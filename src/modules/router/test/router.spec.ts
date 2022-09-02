import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'

import { Router } from '../router'
import Block from "../../block/block";

describe('Router', () => {
    before(() => {
        const dom = new JSDOM(
            '<html></html>',
            { url: 'http://localhost/' },
        )
        global.window = dom.window
        global.document = dom.window.document
    })

    it('Router go', () => {
        const router = new Router()
        router.go('/321')
        router.go('/123')
        expect(window.history.length).to.eq(3)
        expect(window.location.pathname).to.eq('/123')
    })

    it('Show and hide components', () => {
        const block1 = {
            show: sinon.spy(),
            hide: sinon.spy(),
        }

        const block2 = {
            show: sinon.spy(),
            hide: sinon.spy(),
        }

        const router = new Router()
        router
            .use('*', block1 as Block)
            .use('/url', block2 as Block)
            .start()

        router.go('/url')

        sinon.assert.calledOnce(block1.show)
        sinon.assert.calledOnce(block1.hide)
        sinon.assert.calledOnce(block2.show)
    })
})
