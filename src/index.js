
import {
  LitElement,
  html,
  css
} from 'lit';

export class MyElement extends LitElement {
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

customElements.define('my-element', MyElement);