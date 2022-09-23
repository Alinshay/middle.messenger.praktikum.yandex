import { expect } from 'chai'
import { JSDOM } from 'jsdom'

import Block from '../block'

describe('Block', () => {
    before(() => {
        const dom = new JSDOM(
            '<html lang="ru"></html>',
            { url: 'http://localhost/' },
        )

        const globalObj: any = global
        globalObj.window = dom.window
        globalObj.document = dom.window.document
    })

    it('props', () => {
        const block = new Block('span', { prop: 1 })
        expect(block.props.prop).to.eq(1)
    })

    it('attr', () => {
        const block = new Block('span', { attr: { class: 'some_class' } })
        expect(block.props.attr.class).to.eq('some_class')
    })

    it('hide', () => {
        const block = new Block('span')
        block.hide()
        expect(block.getContent().style.display).to.eq('none')
    })

    it('show', () => {
        const block = new Block('span')
        block.show()
        expect(block.getContent().style.display).to.eq('flex')
    })
})
