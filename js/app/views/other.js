"use strict";

import { html, render } from "/js/lib/lit-html/lit-html.js";

const template = (d) => html`
<article class="row">
  <div class="col-sm-12">
    <h2>Other Projects I've Done</h2>
    <ul>
      <li><a href="#other-befunge">Befunge IDE</a> - an interactive development environment for the Befunge programming language</li>
      <li><a href="#other-clock">RGB Clock</a> - a clock that tells time using the colors Red, Blue, and Green</li>
    </ul>
  </div>
</article>
`;

export default class OtherView extends Backbone.View {
  render() {
    render(template(), this.el);
    return this;
  }
}
