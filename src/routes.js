import { html } from 'lit-element';

const routes = {
    '': async () => { await import('/src/home-page.js'); return html`<home-page></home-page>` },
    '404': async () => { await import('/src/not-found-page.js'); return html`<not-found-page></not-found-page>` },
    'works': async () => { await import('/src/works-page.js'); return html`<works-page></works-page>` },
    'reflections': async () => { await import('/src/reflections-page.js'); return html`<reflections-page></reflections-page>`}
}

export const handleNavigation = (e) => {
    window.router.pushState({}, e.path[0].title || e.path[0].innerText, e.path[0].href);
    e.preventDefault();
}

export const fetchPageForRoute = (route, options) => {
    const immediateRouteData = route.getImmediateRouteData();
    const subRoute = route.getSubroute();

    if (routes.hasOwnProperty(immediateRouteData)) {
        return routes[immediateRouteData]({
            ...options,
            subRoute
        });
    } else {
        requestAnimationFrame(() => router.replaceState({}, "Not found", "/404"));
        return new Promise(() => {});
    }
}