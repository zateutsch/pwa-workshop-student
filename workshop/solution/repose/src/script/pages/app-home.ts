import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
// import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      .hero {
        height: 90vh;
        min-height: 600px;
        max-height: 900px;
        max-width: 100%;
        max-width: 100vw;
        padding: 0 48px;
        overflow-x: hidden;
        position: relative;
      }

      .hero__decor {
        position: absolute;
        background-color: #45B08C;
        background-image: url('/assets/media/wave.webp');
        background-repeat: no-repeat;
        background-position: bottom;
        top: 0px;
        left: 0px;
        right: 0px;
        height: 45rem;
      }

      .hero__inner {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .hero__top-content {
        flex: 1 1 0px;
        color: white;
        margin: 5rem;
        text-align: center;
      }

      .hero__top-content h1 {
        font-weight: normal;
        font-size: 48px;
      }

      .hero__bottom-content {
        flex: 1 1 0px;
      }

      .hero__bottom-content img {
        width: 100%;
      }

      .footer {
        background-color: #FAE8E0;
        padding: 25px 50px;
        z-index: 10;
        position: absolute;
        text-align: center;
        bottom: 0;
        left: 0;
        right: 0;
      }

      #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
        color: white;
      }

      @media (min-width: 1024px) {
        #welcomeCard,
        #infoCard {
          width: 54%;
        }
      }

      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }

        #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
          color: initial;
        }
      }

      @media(prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #4e4e4e;
          color: white;
          border: none;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  render() {
    return html`
      <app-header></app-header>
      <div class="hero">
        <div class="hero__decor"></div>
        <!-- <pwa-install>Install Repose</pwa-install> -->
        <div class="hero__inner">
          <div class="hero__top-content">
            <h1>Intelligent Daily Mood Journal</h1>
            <p>Repose is your personal mood tracking companion that helps you organize and reflect upon your daily thoughts.</p>
            <fluent-anchor href="/journal" appearance="lightweight">Mood check-in</fluent-anchor>
          </div>
          <div class="hero__bottom-content">
          <img src="assets/media/humaaans.svg" alt="Humans">
          </div>
        </div>
      </div>
      <section id="footer" class="footer">
        <span>© Microsoft 2022</span>
      </section>
    `;
  }
}
