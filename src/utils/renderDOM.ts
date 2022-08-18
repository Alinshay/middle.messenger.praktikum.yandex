import Block from '../modules/block'

export default function render(query: string, block: Block) {
    const root = document.querySelector<HTMLElement>(query)
        if (root !== null) {
            root.appendChild(block.getContent())
            block.dispatchComponentDidMount()
        }
    return root
}
