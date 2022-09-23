declare module 'handlebars/runtime' {
    export function registerHelper(name: string, fn: (value: string) => boolean): void
}
