import { LitElement, html } from 'lit-element';

class ReflectionsPage extends LitElement {
    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-grow: 1;
                    user-select: none;
                }

                h1 {
                    font-weight: 500;
                }

                a {
                    color: black;
                    text-decoration: none;
                }

                a.icon {
                    margin: 0 8px;
                }

                a.icon > img {
                    vertical-align: text-bottom;
                }

                .hyperlink {
                    display: flex;
                    flex-direction: row;
                    margin: 10px 0;
                }

                .hyperlink .icon-container {
                    display: inline-block;
                    opacity: 0;
                    transition: opacity 0.2s 0.3s, filter 0.3s 0.3s, transform 0.4s 0.3s;
                    filter: saturate(0);
                    transform: translateX(-18px);
                    will-change: transform;
                }

                .hyperlink:hover .icon-container {
                    opacity: 1;
                    filter: saturate(1);
                    transform: translateX(0);
                }

                .space {
                    width: 100%;
                    max-width: 720px;
                }

                section {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin: 18px;
                    margin-top: 40px;
                }

                @media (orientation: portrait) and (max-device-width: 768px) {
                    section {
                        align-items: center;
                        text-align: center;
                    }

                    section > p {
                        line-height: 1.5;
                        margin: 7px 14px;
                    }

                    section > p > span {
                        display: block;
                        width: 100%;
                    }

                    .hyperlink {
                        flex-direction: column;
                        margin-bottom: 14px;
                    }

                    .hyperlink .icon-container {
                        opacity: 1;
                        filter: saturation(1);
                        transform: none;
                        margin: 12px 0;
                    }
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
                    <div class="hyperlink">
                        <span style="margin-right: 12px;">Too Shy — Ryan Hutchins</span>
                        <div class="icon-container">
                            <a class="icon" target="_blank" href="https://www.youtube.com/watch?v=W3vzWIU-gsg"><img src="/res/yt_icon_rgb.png" height="18px" /></a>
                        </div>
                    </div>
                    <div class="hyperlink">
                        <span style="margin-right: 12px; ">The Usual Suspects</span>
                        <div class="icon-container">
                            <a class="icon" target="_blank" href="https://www.hulu.com/movie/the-usual-suspects-1699790b-9395-42c4-8621-774bbd20f00c" @click=${() => {
                                    gtag('event', 'outgoing_traffic', {
                                        'event_category': 'navigation',
                                        'event_label': 'https://www.hulu.com/movie/the-usual-suspects-1699790b-9395-42c4-8621-774bbd20f00c',
                                    });
                                }}>
                                <img src="/res/hulu-interactive-rgb.png" height="16px" />
                            </a>
                            <a class="icon" target="_blank" href="https://play.google.com/store/movies/details/The_Usual_Suspects?id=tjwXBkooYaI" @click=${() => {
                                    gtag('event', 'outgoing_traffic', {
                                        'event_category': 'navigation',
                                        'event_label': 'https://play.google.com/store/movies/details/The_Usual_Suspects?id=tjwXBkooYaI',
                                    });
                                }}>
                                <img src="/res/google_play_881808.png" height="18px" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}

customElements.define('reflections-page', ReflectionsPage);
