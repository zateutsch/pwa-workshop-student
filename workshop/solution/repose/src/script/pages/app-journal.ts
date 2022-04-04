import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-journal')
export class AppJournal extends LitElement {
  static get styles() {
    return css`
      .main {
        padding: 0 48px;
        position: relative;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header enableBack="${true}"></app-header>
      <div class="main">
        <hero-decor></hero-decor>
      </div>
    `;
  }
}
