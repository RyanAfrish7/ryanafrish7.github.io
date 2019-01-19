import { LitElement, html } from 'lit-element';
import { handleNavigation } from './routes';

class NotFoundPage extends LitElement {
    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-grow: 1;
                }

                h1 {
                    font-weight: 500;
                }

                a {
                    color: black;
                    text-decoration: none;
                }
            </style>
            <div style="height: 10vh"></div>
            <h1>Not found</h1>
            <a href="/" @click=${handleNavigation} title="ryanafrish7">Lost? Click here to navigate to home.</div>
        `;
    }
}

customElements.define('not-found-page', NotFoundPage);
