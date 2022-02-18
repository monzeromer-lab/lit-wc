
import {
  LitElement,
  html
} from 'lit';

import './style.css';

export class APP extends LitElement {
  static properties() {
    this.name = {};
  }

  constructor() {
    super();
    this.name = 'Monzer Omer';
  }

  render() {
    return html `
      <h1>Hi ${this.name} saying your name from Lit</h1>
    `;
  }
}

customElements.define('wc-app', APP);