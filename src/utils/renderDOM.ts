import Block from '../modules/block'

export default function render(query: string, block: Block) {
    const root = document.querySelector(query) as Node

    root.appendChild(block.getContent())
    block.dispatchComponentDidMount()

    return root
}
