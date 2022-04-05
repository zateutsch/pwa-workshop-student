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
        margin: 4rem 5rem 0;
        text-align: center;
      }

      .hero__top-content h1 {
        font-weight: normal;
        font-size: 48px;
      }

      .hero__top-content fluent-anchor {
        margin-top: 1rem;
      }

      .hero__top-content fluent-anchor::part(control) {
        border-radius: 15px;
        color: #45B08C;
      }

      .hero__top-content fluent-anchor::part(control):hover {
        color: #2E765E;
      }

      .hero__bottom-content {
        flex: 1 1 0px;
        height: 50vh;
      }

      .hero__bottom-content img {
        width: 100%;
        height: 100%;
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
      <app-header enableBack="${true}"></app-header>
      <div class="hero">
        <hero-decor></hero-decor>
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
      <app-footer></app-footer>
    `;
  }
}
