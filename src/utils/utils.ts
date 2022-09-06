import store, { IChat, IProfile } from '../modules/store'

export const getProfile = () : IProfile | undefined => store.getState()?.profile
export const getProfileId = () : number | undefined => store.getState()?.profile?.id
export const getChatId = () : number | undefined => store.getState()?.chat?.id
export const getChatList = () : Array<IChat> | undefined => store.getState()?.chatList
