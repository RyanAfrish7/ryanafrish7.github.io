export class Route {
    constructor(path, query, parentPath) {
        this.path = path;
        this.query = query;
        this.parentPath = parentPath;
    }

    getImmediateRouteData() {
        return this.path[0];
    }

    getSubroute() {
        if(this.path.length <= 1) {
            return null;
        } else {
            return new Route(this.path.slice(1), this.query, [...this.parentPath, this.path[0]]);
        }
    }

    static currentLocation() {
        const path = window.decodeURIComponent(location.pathname);
    
        return new Route((path || '').slice(1).split('/'), new URLSearchParams(location.search), []);
    }
}

export class Router {
    constructor() {
        window.addEventListener('popstate', () => {
            this.onLocationChanged && this.onLocationChanged(Route.currentLocation());
        });
    }

    pushState(state, title, url) {
        history.pushState(state, title, url);
        
        this.onLocationChanged && this.onLocationChanged(Route.currentLocation());
    }

    replaceState(state, title, url) {
        history.replaceState(state, title, url);    

        this.onLocationChanged && this.onLocationChanged(Route.currentLocation());
    }
}