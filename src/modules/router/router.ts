import Block from '../block/block'
import { getProfileId } from '../../utils/utils'

import Route from './route'

export class Router {
    private history : History = window.history

    private _currentRoute: string | null = null

    private routes : Record<string, any> = []

    private static __instance: Router

    constructor() {
        if (Router.__instance) {
            // eslint-disable-next-line no-constructor-return
            return Router.__instance
        }

        Router.__instance = this
    }

    use(pathname: string, block: Block) {
        const route = new Route(pathname, block, { rootQuery: 'main' })
        this.routes.push(route)

        return this
    }

    start() {
        const isAuth = getProfileId()

        window.onpopstate = (event: PopStateEvent) => {
            const path = (event.currentTarget as typeof window).location.pathname
            if (!isAuth && path !== '/singup') {
                this._onRoute('/')
            } else {
                this._onRoute(path)
            }
        }

        const path = window?.location?.pathname
        if (!isAuth && path !== '/signup') {
            this._onRoute('/')
            this._currentRoute = '/'
        } else {
            this._onRoute(path)
            this._currentRoute = path
        }
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname)

        if (!route) {
            return
        }

        if (this._currentRoute) {
            this.getRoute(this._currentRoute).leave()
        }

        this._currentRoute = pathname

        route.render(route, pathname)
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname)
        this._onRoute(pathname)
    }

    goBack() {
        this.history.back()
    }

    getRoute(pathname: string) {
        return this.routes.find((route : Route) => route.match(pathname)) || this.routes.find((route: Route) => route.match('*'))
    }
}
