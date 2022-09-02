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

class Store extends EventBus {
    private state: Indexed = {}

    public getState() {
        return this.state
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value)
        this.emit(StoreEvents.Updated)
    }
}

export default new Store()
