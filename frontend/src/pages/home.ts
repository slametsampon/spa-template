// frontend/src/pages/home.ts

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/cards/feature-card.js';

@customElement('page-home')
export class PageHome extends LitElement {
  createRenderRoot() {
    return this; // agar Tailwind CSS global tetap aktif
  }

  render() {
    return html`
      <section class="p-6 space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 class="text-2xl font-bold text-green-800 mb-2">
            🎉 Selamat Datang di lit-template
          </h1>
          <p class="text-gray-700 text-base">
            Template LitElement + Tailwind CSS yang dirancang untuk pengembangan
            UI modular, ringan, dan siap produksi.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <feature-card
            title="Web Components"
            icon="🧩"
            color="green"
            description="Bangun antarmuka modular dan reusable dengan LitElement berbasis standar Web."
          ></feature-card>

          <feature-card
            title="Tailwind CSS"
            icon="🎨"
            color="blue"
            description="Gunakan utility-first CSS langsung di HTML dengan performa tinggi dan style konsisten."
          ></feature-card>

          <feature-card
            title="Build Cepat"
            icon="⚡"
            color="yellow"
            description="Didukung oleh esbuild untuk bundling super cepat dan optimalisasi otomatis."
          ></feature-card>
        </div>

        <footer class="text-sm text-gray-500 mt-6">
          Gunakan menu navigasi di atas untuk menjelajahi struktur komponen dan
          halaman lainnya.
        </footer>
      </section>
    `;
  }
}
