import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until';
import '@polymer/paper-spinner/paper-spinner-lite';

const reposToShow = {
    "RyanAfrish7/web-experiments": {
        "html_url": "https://ryanafrish7.github.io/web-experiments/"
    },
    "RyanAfrish7/thumbsupply": {
        "description": "Asynchronous Node.js module to create, cache and fetch thumbnails from videos",
        "html_url": "https://www.npmjs.com/package/thumbsupply"
    },
    "RyanAfrish7/system-control": {
        "description": "Node.js module to configure basic system parameters (brightness and system-control)",
        "html_url": "https://www.npmjs.com/package/system-control"
    },
    "RyanAfrish7/Lyrix": {},
    "RyanAfrish7/ar-picker": {
        "html_url": "https://www.npmjs.com/package/@ryanafrish7/ar-picker"
    },
    "RyanAfrish7/ApkWorks": {},
    "RyanAfrish7/air-nsd": {}
};

class WorksPage extends LitElement {
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

                .quote {
                    text-align: center;
                }

                .quote .content {
                    font-size: 20px;
                    margin: 12px 0;
                }

                .quote .author {
                    color: rgba(0, 0, 0, 0.54);
                    font-style: italic;
                }

                .quote .author::before {
                    content: "— "
                }

                #space {
                    max-width: 1280px;
                    margin: 24px auto;
                }

                a {
                    color: initial;
                    text-decoration: none;
                }

                .card {
                    display: block;
                    border-radius: 24px;
                    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.14);
                    padding: 18px;
                    min-width: 280px;
                    width: 480px;
                    margin: 32px 0;
                    color: rgba(0, 0, 0, 0.87);
                }

                .card h3 {
                    font-weight: 600;
                    font-size: 16px;
                    margin: 12px 0;
                    color: rgba(0, 0, 0, 0.54);
                }

                paper-spinner-lite {
                    --paper-spinner-color: rgba(0, 0, 0, .0.54);
                }
            </style>
            
            <div style="height: 10vh"></div>

            <div class="quote">
                <div class="content">Let the beauty of what you love be what you do.</div>
                <div class="author">Muhammad Rumi‎</div>
            </div>

            <div style="height: 4vh"></div>

            <div id="space">
                ${until(
                    this.fetchRepos().then(repos => repos.map(repo => this.renderCard(repo))), 
                    html`<div>
                        <paper-spinner-lite active></paper-spinner-lite>
                    </div>`
                )}
            </div>
        `;
    }

    renderCard(repo) {
        return html`
            <a class="card" href=${repo.html_url} target="_blank" rel="noopener noreferrer" @click=${() => {
                gtag('event', 'page_not_found', {
                    'event_category': 'navigation',
                    'event_label': '/' + immediateRouteData,
                });
            }}>
                <h3>${repo.name}</h3>
                <p>${repo.description || "Please checkout at Github."}</p>
            </a>
        `;
    }

    fetchRepos() {
        return fetch('https://api.github.com/users/ryanafrish7/repos')
            .then(response => response.json())
            .then(repos => {
                return repos.filter(repo => reposToShow.hasOwnProperty(repo.full_name))
                    .map(repo => Object.assign(repo, reposToShow[repo.full_name]))
                    .sort((lhs, rhs) => rhs.watchers_count - lhs.watchers_count);
            });
    }
}

customElements.define('works-page', WorksPage);
