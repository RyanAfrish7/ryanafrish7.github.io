import { LitElement, html } from 'lit-element';
import { handleNavigation } from './routes';

class ReflectionsPage extends LitElement {
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

                .space {
                    width: 100%;
                    max-width: 720px;
                }

                section {
                    margin-top: 40px;
                }

                iframe.spotify {
                    overflow: hidden;
                    border-radius: 12px;
                }
            </style>
            <div class="space">
                <div style="height: 10vh"></div>
                <section>
                    <h3>Ideologies</h3>
                    <p>Minimalism, Libertarianism, Perfectionism</p>
                </section>
                <section>
                    <h3>Musics</h3>
                    <p>
                        <iframe class="spotify" src="https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <iframe class="spotify" src="https://open.spotify.com/embed/track/6oAMvvfm6kQhADxsfTC9Ah" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <iframe class="spotify" src="https://open.spotify.com/embed/track/3u0W3gJQNV5gegMmntzby8" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <iframe class="spotify" src="https://open.spotify.com/embed/track/5iv6lZAIguXWYW4Zaz5zvY" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </p>
                </section>
                <section>
                    <h3>Films</h3>
                    <p><a href="https://www.youtube.com/watch?v=W3vzWIU-gsg">Too Shy — Ryan Hutchins</a></p>
                    <p><a href="https://www.hulu.com/movie/the-usual-suspects-1699790b-9395-42c4-8621-774bbd20f00c">The Usual Suspects</a></p>
                </section>
            </div>
        `;
    }
}

customElements.define('reflections-page', ReflectionsPage);
