// frontend/src/pages/about.ts

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-about')
export class AboutPage extends LitElement {
  createRenderRoot() {
    return this; // gunakan light DOM agar Tailwind CSS global tetap aktif
  }

  render() {
    return html`
      <section class="p-6 md:p-10 max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold text-center text-green-700 mb-6">
          Tentang lit-template
        </h1>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          <span class="font-semibold text-green-600">lit-template</span> adalah
          template proyek siap pakai untuk membangun antarmuka web modular dan
          modern menggunakan teknologi
          <span class="font-semibold">LitElement</span> dan
          <span class="font-semibold">Tailwind CSS</span>. Template ini
          dirancang untuk mempercepat pengembangan UI dengan pendekatan
          <span class="font-semibold text-green-600"
            >Component-Driven Development (CDD)</span
          >.
        </p>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Proyek ini dapat digunakan sebagai fondasi berbagai sistem berbasis
          web, baik untuk dashboard IoT, sistem informasi, maupun aplikasi
          mandiri. Dengan arsitektur yang bersih dan terorganisir, lit-template
          mendukung produktivitas tim dan skalabilitas proyek jangka panjang.
        </p>

        <h2 class="text-xl font-semibold text-green-700 mt-8 mb-4">
          Teknologi Inti
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">Frontend</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Framework: <span class="font-medium">LitElement</span></li>
              <li>Styling: <span class="font-medium">Tailwind CSS</span></li>
              <li>Build Tool: <span class="font-medium">esbuild</span></li>
              <li>Arsitektur: <span class="font-medium">CDD</span></li>
              <li>Bahasa: <span class="font-medium">TypeScript</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">
              Integrasi Opsional
            </h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>MQTT via WebSocket (untuk sistem IoT)</li>
              <li>REST API backend (Fastify, Express, dll)</li>
              <li>Hosting lokal: Raspberry Pi / Static Host</li>
              <li>Deployment: GitHub Pages, Vercel, dsb.</li>
            </ul>
          </div>
        </div>

        <h2 class="text-xl font-semibold text-green-700 mt-10 mb-4">
          Struktur Modular
        </h2>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Struktur proyek memisahkan komponen, halaman, layanan data, dan
          konteks aplikasi agar pengembangan tetap rapi, scalable, dan mudah
          di-maintain dalam tim.
        </p>

        <p class="text-base text-gray-700 leading-relaxed">
          lit-template cocok digunakan sebagai basis untuk berbagai jenis
          aplikasi antarmuka modern — ringan, cepat, dan sepenuhnya open-source.
        </p>
      </section>
    `;
  }
}
