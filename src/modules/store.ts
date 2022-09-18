import EventBus from './event-bus'

type Indexed<T = unknown> = {
    [key in string]: T
}

function isObject(val: unknown): Boolean {
    if (val === null) { return false }
    return ((typeof val === 'function') || (typeof val === 'object'))
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
    const result: Indexed = lhs
    const lhsKeys: Array<string> = Object.keys(lhs)

    // eslint-disable-next-line no-restricted-syntax
    for (const rhsProp in rhs) {
        if (lhsKeys.includes(rhsProp)) {
            if (isObject(rhs[rhsProp]) && isObject(lhs[rhsProp])) {
                result[rhsProp] = merge(rhs[rhsProp as string] as Indexed, lhs[rhsProp as string] as Indexed)
            }
        } else {
            result[rhsProp] = rhs[rhsProp]
        }
    }

    return result
}

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (!isObject(object)) {
        return object
    }

    const properties: Array<string> = path.split('.')
    const obj: Indexed = {}
    let curr: Indexed = obj

    for (let i = 0; i < properties.length; i += 1) {
        const next: {} = {}
        if (i === properties.length - 1) {
            curr[properties[i] as string] = value
        } else {
            curr[properties[i] as string] = next
        }

        curr = next
    }

    return merge(object as Indexed, obj as Indexed)
}

// eslint-disable-next-line no-shadow
export enum StoreEvents {
    Updated = 'updated',
}

export interface IProfile {
    avatar: string | null
    display_name: string | null
    email: string
    first_name: string
    id: number
    login: string
    phone: string
    second_name: string
}

export interface IChat {
    avatar: string | null
    created_by: number
    id: number
    last_message: {
        content: string
        id: number
        time: string
        user: IProfile
    }
    time: string
    title: string
    unread_count: number
}

export interface IState {
    chat?: {
        id: number,
        users: Array<IProfile>
    },
    chatList? : Array<IChat>
    profile? : IProfile
}

class Store extends EventBus {
    private state: IState = {}

    public getState(): IState {
        return this.state
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value)
        this.emit(StoreEvents.Updated)
    }
}

export default new Store()
