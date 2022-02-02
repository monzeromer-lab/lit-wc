/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static properties (){
    this.name = {};
  }

  constructor() {
    super();
    this.name = 'Monzer Omer';
  }

  render() {
    return html`
      <h1>Hi ${this.name} saying your name from Lit</h1>
    `;
  }
}

customElements.define('my-element', MyElement);
