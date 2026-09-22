// src/scripts/pages/about/about-page.js
export default class AboutPage {
  async render() {
    return `
      <section class="container about-page-section">
        <div class="about-hero">
          <span class="about-badge">🚀 Progressive Web App</span>
          <h1 tabindex="0" class="about-title">Tentang StoryApp</h1>
          <p class="about-lead">Platform interaktif untuk berbagi cerita, pengalaman, dan petualangan lengkap dengan visualisasi lokasi geografis secara real-time dan offline-first.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon">📲</span>
            <h3>Dukungan PWA & Offline</h3>
            <p>Dapat di-install ke layar utama perangkat (Mobile/Desktop) dan diakses bahkan tanpa koneksi internet.</p>
          </div>

          <div class="feature-card">
            <span class="feature-icon">🔔</span>
            <h3>Push Notification</h3>
            <p>Dapatkan pemberitahuan langsung di perangkat Anda setiap kali cerita baru dibagikan oleh pengguna lain.</p>
          </div>

          <div class="feature-card">
            <span class="feature-icon">💾</span>
            <h3>IndexedDB & Auto-Sync</h3>
            <p>Simpan cerita favorit secara lokal dan buat draf saat offline yang akan di-sync otomatis ke server saat online.</p>
          </div>

          <div class="feature-card">
            <span class="feature-icon">🗺️</span>
            <h3>Peta Interaktif</h3>
            <p>Integrasi peta OpenStreetMap & Leaflet untuk menjelajahi titik koordinat cerita dari berbagai belahan dunia.</p>
          </div>
        </div>

        <div class="tech-stack-box">
          <h2>🛠️ Teknologi Yang Digunakan</h2>
          <div class="tech-tags">
            <span class="tech-tag">Webpack 5</span>
            <span class="tech-tag">Workbox PWA</span>
            <span class="tech-tag">Service Worker</span>
            <span class="tech-tag">IndexedDB (idb)</span>
            <span class="tech-tag">Leaflet JS</span>
            <span class="tech-tag">VAPID Push API</span>
            <span class="tech-tag">View Transitions API</span>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {}
}