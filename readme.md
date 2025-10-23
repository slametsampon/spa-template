# 🌱 lit-template – Boilerplate Web UI Modular Berbasis LitElement

**lit-template** adalah _boilerplate_ (template proyek) siap pakai untuk membangun antarmuka web modular berbasis **LitElement**, dengan dukungan penuh terhadap prinsip _Component-Driven Development (CDD)_. Template ini dirancang untuk mempercepat pengembangan UI modern, ringan, dan scalable — cocok untuk integrasi dengan sistem IoT, dashboard realtime, atau aplikasi web mandiri.

---

## 🎯 Visi

> Menyediakan fondasi siap pakai yang _modular, efisien_, dan _terstruktur_ untuk pengembangan antarmuka berbasis Web Components menggunakan LitElement dan Tailwind CSS.

---

## 🧰 Teknologi yang Digunakan

### ⚛️ Frontend

- **Framework:** LitElement (Web Components, TypeScript)
- **Styling:** Tailwind CSS (inline class utility)
- **Build Tool:** `esbuild` (super fast bundler)
- **Arsitektur UI:** Component-Driven Development (CDD)

### 🔧 Backend (Opsional)

> lit-template dapat berdiri sendiri sebagai UI statis, namun mudah diintegrasikan dengan backend berikut:

- **MQTT via WebSocket** (untuk IoT / real-time dashboard)
- **REST API** (untuk data retrieval)
- **Contoh Bridge:** Fastify + MQTT.js (tidak disertakan dalam repo ini)

### 📡 IoT Node (Integrasi Opsional)

Jika digunakan dalam proyek IoT:

- **Device:** ESP32 / ESP8266
- **Protocol:** MQTT (Pub/Sub)
- **Transport:** WebSocket / HTTP
- **Status:** Tidak disertakan dalam template, namun struktur sudah mendukung komunikasi data real-time

### 🛠️ Tools & DevOps

- **IDE:** Visual Studio Code
- **Version Control:** Git + GitHub
- **Deployment Target:**

  - GitHub Pages (untuk demo)
  - Raspberry Pi (untuk sistem embedded)
  - ESP SPIFFS / LittleFS (untuk antarmuka lokal langsung dari perangkat)

---

## 🧱 Struktur Proyek lit-template

```bash
lit-template/
├── frontend/
│   ├── src/
│   │   ├── assets/              # File statis (gambar, ikon, dll)
│   │   ├── components/          # Web Components reusable (LitElement)
│   │   ├── config/              # Konfigurasi global (env, endpoint, dsb.)
│   │   ├── context/             # State management (context/provider pattern)
│   │   ├── pages/               # Halaman modular (rute: login, home, dst.)
│   │   │   ├── about.ts
│   │   │   ├── home.ts
│   │   │   ├── login.ts
│   │   │   ├── not-authorized.ts
│   │   │   └── not-found.ts
│   │   ├── repositories/        # Akses data layer (API, MQTT, dsb.)
│   │   ├── services/            # Abstraksi logika bisnis
│   │   ├── index.html           # Entrypoint HTML aplikasi
│   │   ├── main.ts              # Entrypoint utama frontend (bootstrap app)
│   │   └── style.css            # Import Tailwind + custom style (jika perlu)
│   ├── esbuild.config.js        # Konfigurasi bundler esbuild
│   ├── tailwind.config.js       # Konfigurasi utilitas Tailwind CSS
│   └── tsconfig.json            # Konfigurasi TypeScript khusus frontend
├── models/                      # Definisi model data (interface, DTO, dsb.)
├── node_modules/                # Dependency (auto-generated)
├── .gitignore                   # Ignore file untuk Git
├── package-lock.json            # Lockfile npm
├── package.json                 # Metadata proyek dan dependency
├── readme.md                    # Dokumentasi proyek
├── tsconfig.base.json           # Konfigurasi dasar TypeScript (shared config)
```

---

## 🌐 Domain & Branding

Template ini dapat digunakan sebagai fondasi untuk berbagai sistem:

- **Nama Bebas** – gunakan branding Anda sendiri.
- **Contoh Nama:** `farm-hmi`, `iot-dashboard`, `env-monitor`, dll.
- **Contoh Domain:** `app.farmku.id`, `dashboard.iotsense.dev`, `ui.agrocloud.local`

---

## ✅ Fitur & Keunggulan

- ⚡️ Ultra ringan & cepat berkat _esbuild_
- 🧩 Modular dengan pendekatan Web Components
- 🧠 Terstruktur untuk kolaborasi tim (CDD)
- 📡 Siap integrasi MQTT / WebSocket
- 🧱 Fleksibel untuk dipakai di proyek IoT, dashboard, atau standalone app

---

## ✨ Cara Menggunakan

### 🔧 Setup Lokal

```bash
git clone https://github.com/username/lit-template.git
cd lit-template
npm install
npm run dev
```

### 🔨 Build untuk Produksi

```bash
npm run build
```

### 🚀 Deploy ke GitHub Pages

Pastikan branch `gh-pages` diaktifkan:

```bash
npm run deploy
```

---

## 🧩 Pengembangan Komponen

Buat komponen baru di folder `src/components`:

```ts
// src/components/my-button.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    button {
      @apply px-4 py-2 bg-blue-500 text-white rounded;
    }
  `;
  render() {
    return html`<button><slot></slot></button>`;
  }
}
```

Gunakan di `index.html` atau `main.ts`:

```html
<my-button>Click Me</my-button>
```

---

## 🤝 Kontribusi

Kami terbuka untuk kolaborasi! Silakan buat issue atau pull request untuk perbaikan, fitur baru, atau dokumentasi tambahan.

---

## ✨ Penutup

lit-template adalah titik awal yang ringan namun powerful untuk membangun antarmuka modular modern. Baik untuk keperluan dashboard IoT, sistem monitoring, maupun UI aplikasi lainnya — template ini siap dikembangkan sesuai kebutuhan Anda.

> **Repo:** [github.com - lit-template](https://github.com/slametsampon/lit-template)

---
