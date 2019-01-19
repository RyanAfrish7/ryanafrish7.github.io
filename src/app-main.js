import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until';
import { Router, Route } from './router';
import { fetchPageForRoute, handleNavigation } from './routes';

class AppMain extends LitElement {
  static get properties() {
    return {
      currentRoute: { type: Object }
    };
  }

  constructor() {
    super();

    // setup routing
    this.currentRoute = Route.currentLocation();

    window.router = new Router();
    window.router.onLocationChanged = (route) => {
      this.currentRoute = route;
    };
  }

  render() {
    return html`
      <style>
        :host {
            display: flex;
            flex-direction: column;
            min-height: 100vh;    
        }

        .menu {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          max-width: 720px;
          padding: 12px 14px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        .menu a {
          color: black;
          padding: 12px;
          text-decoration: none;
        }
      </style>

      <div class='menu'>
        <a href='/' @click=${handleNavigation}>Home</a>
        <a href='/works' @click=${handleNavigation}>Works</a>
        <a href='/reflections' @click=${handleNavigation}>Reflection</a>
      </div>

      ${until(fetchPageForRoute(this.currentRoute), html`loading...`)}
    `;
  }
}

customElements.define('app-main', AppMain);
