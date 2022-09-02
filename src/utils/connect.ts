import Block from '../modules/block/block'
import store, { StoreEvents } from '../modules/store'

type Indexed<T = unknown> = {
    [key in string]: T
}

type PlainObject<T = unknown> = {
    [k in string]: T
};

function isArray(value: unknown): value is [] {
    return Array.isArray(value)
}

function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]'
}

function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
    return isPlainObject(value) || isArray(value)
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key]
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value as PlainObject, rightValue as PlainObject)) {
                continue
            }
            return false
        }

        if (value !== rightValue) {
            return false
        }
    }

    return true
}

export function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
    return class extends Component {
        constructor(...props: any) {
            super({ ...props[0], ...mapStateToProps(store.getState()) })

            let state = mapStateToProps(store.getState())
            store.on(StoreEvents.Updated, () => {
                const newState = mapStateToProps(store.getState())
                if (!isEqual(state, newState)) {
                    this.setProps({ ...mapStateToProps(store.getState()) })
                }
                state = newState
            })
        }
    }
}
