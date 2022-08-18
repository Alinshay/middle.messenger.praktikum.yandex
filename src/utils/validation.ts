export const validation = (content: any, regexp: RegExp) : boolean => {
    const { value } = content
    if (!value.match(regexp)) {
        content.classList.add('error')
        return false
    }
    return true
}

export const resetValidation = (content: any) : void => {
    content.classList.remove('error')
}
