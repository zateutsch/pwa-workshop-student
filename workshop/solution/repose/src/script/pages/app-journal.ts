import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-journal')
export class AppJournal extends LitElement {
  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header enableBack="${true}"></app-header>

      <div>
        <h2>Journal Page</h2>
      </div>
    `;
  }
}
