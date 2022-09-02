export const validation = (content: HTMLInputElement, regexp: RegExp) : boolean => {
    const { value } = content
    if (!value.match(regexp)) {
        content.classList.add('error')
        return false
    }
    return true
}

export const resetValidation = (content: HTMLElement) : void => {
    content.classList.remove('error')
}
