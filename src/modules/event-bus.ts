export default class EventBus {
    public listeners: Record<string, Function[]>

    constructor() {
        this.listeners = {}
    }

    on(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
        this.listeners[event].push(callback)
    }

    off(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`)
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback,
        )
    }

    emit(event: string, ...args: Array<unknown>): void {
        if (!this.listeners[event]) {
            throw new Event(`Нет события: ${event}`)
        }

        this.listeners[event].forEach((listener) => {
            listener(...args)
        })
    }
}
