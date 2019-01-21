import { LitElement, html } from 'lit-element';

class HomePage extends LitElement {
    render() {
        return html`
            <style>
                :host {
                    position: relative;
                    display: block;
                    width: 100%;
                    flex-grow: 1;
                }

                #space {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: minmax(256px, 50vh);
                }

                #avatar-container {
                    position: relative;
                }

                #avatar {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    max-height: 100%;
                    -webkit-user-drag: none;
                    user-select: none;
                    object-fit: contain;
                }

                #intro-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    grid-column: 2 / -1;
                }

                .name {
                    font-size: 40px;
                    font-weight: 500;
                    margin: 0;
                }

                .tag-line {
                    margin: 12px 0;
                    color: rgba(0, 0, 0, 0.54);
                }

                @media (orientation: portrait) and (max-device-width: 768px) {
                    #space {
                        height: 100%;
                        grid-template-columns: 1fr;
                        grid-template-rows: max-content 1fr;
                    }

                    #avatar-container {
                        grid-column: 1 / -1;
                        grid-row: 2;
                    }

                    #intro-container {
                        margin: 20px 4px;
                        grid-column: 1 / -1;
                        grid-row: 1;
                        align-items: center;
                    }
                }
            </style>
            <div id="space">
                <div id="avatar-container">
                    <img id="avatar" src="/res/avatar.svg" alt="avatar" />
                </div>
                <div id="intro-container">
                    <h1 class="name">Afrish Khan S</h1>
                    <div class="tag-line">Web developer</p>
                </div>
            </div>
        `;
    }
}

customElements.define('home-page', HomePage);
