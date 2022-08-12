export const loginRegexp : RegExp = /^(?=[a-zA-Z0-9_%+-]*[A-Za-z]).{3,20}$/
export const nameRegexp : RegExp = /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/
export const emailRegexp : RegExp = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9_%+-]+.[a-zA-Z0-9]+$/
export const passwordRegexp : RegExp = /^(?=.*[A-ZА-Я]).{8,40}$/
export const phoneRegexp : RegExp = /^[+]?[0-9]{10,15}$/
