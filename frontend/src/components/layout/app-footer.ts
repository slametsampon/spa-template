// frontend/src/components/layout/app-footer.ts

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// @ts-ignore
declare const __APP_VERSION__: string;

@customElement('app-footer')
export class AppFooter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer>
        <div class="container">
          <div>
            © ${new Date().getFullYear()} lit-tamplate v${__APP_VERSION__}. All
            rights reserved.
          </div>
          <span>•</span>
          <div>
            <a
              href="https://github.com/slametsampon/lit-template"
              target="_blank"
              >GitHub</a
            >
            <span>•</span>
            <a href="about">About</a>
          </div>
        </div>
      </footer>
    `;
  }
}
