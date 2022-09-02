import store from '../modules/store'

export const getProfile = () : Record<string, any> | undefined => (store.getState() as Record<string, any>)?.profile
export const getProfileId = () : number | undefined => (store.getState() as Record<string, any>)?.profile?.id
export const getChatId = () : number | undefined => (store.getState() as Record<string, any>)?.chat?.id
export const getChatList = () : Record<string, any> | undefined => (store.getState() as Record<string, any>)?.chatList
