# ✨ ShopSphere

ShopSphere adalah aplikasi katalog e-commerce modern dan interaktif yang dibangun menggunakan Angular dan TypeScript. Proyek ini dikembangkan sebagai bagian dari penilaian teknis untuk posisi Web Developer, dengan fokus pada *best practices*, kode yang bersih, *state management* yang reaktif, dan desain UI/UX yang memukau.

Aplikasi ini menampilkan desain **"Aurora Glassmorphism"** yang unik, dengan latar belakang gradien animasi dan elemen UI yang menyerupai panel kaca buram, menciptakan pengalaman pengguna yang premium dan imersif.

-----

## 🌟 Fitur Utama

  - **Katalog Produk Dinamis**: Menampilkan daftar produk yang diambil secara *real-time* dari [FakeStoreAPI](https://fakestoreapi.com/).
  - **Pencarian Real-time**: *Header* dilengkapi dengan *search bar* yang memfilter produk secara langsung saat pengguna mengetik, menggunakan kekuatan RxJS.
  - **Halaman Detail Produk**: Setiap produk dapat di-klik untuk melihat halaman detailnya sendiri, memanfaatkan sistem *routing* dinamis Angular (`/product/:id`).
  - **Fungsionalitas Keranjang Belanja**: Sistem keranjang belanja *client-side* yang lengkap, memungkinkan pengguna untuk:
      - Menambah produk ke keranjang.
      - Melihat jumlah item di *header* secara *real-time*.
      - Mengelola item di halaman keranjang (menambah/mengurangi kuantitas, menghapus item).
  - **Desain Responsif**: Tampilan yang dioptimalkan untuk berbagai ukuran layar, dari *mobile* hingga desktop, termasuk *header* dengan *hamburger menu*.
  - **UI/UX Modern**:
      - **Animated Aurora Background**: Latar belakang gradien yang bergerak halus memberikan nuansa hidup.
      - **Glassmorphism UI**: Kartu produk dan elemen lainnya didesain seperti panel kaca buram.
      - **Efek Interaktif**: Efek *hover* yang memuaskan seperti *glow* dan animasi angkat pada kartu produk.
      - **Loading & Empty States**: Pengalaman pengguna yang lebih baik dengan adanya indikator *loading* (spinner) dan pesan saat produk tidak ditemukan atau keranjang kosong.

-----

## 🛠️ Tech Stack & Tools

  - **Framework**: Angular 20 (dengan arsitektur Standalone)
  - **Bahasa**: TypeScript
  - **Styling**: Tailwind CSS
  - **State Management**: RxJS (BehaviorSubject, Observables) & Angular Services
  - **HTTP Client**: `HttpClientModule` bawaan Angular
  - **Routing**: `RouterModule` bawaan Angular
  - **Deployment**: Vercel

-----

## 📦 Instalasi & Setup Lokal

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut:

#### 1\. Prasyarat

Pastikan kamu sudah menginstall:

  - [Node.js](https://nodejs.org/) (v18 atau lebih baru)
  - npm (biasanya sudah termasuk dengan Node.js)
  - [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

#### 2\. Clone Repositori

```bash
git clone https://github.com/USERNAME_KAMU/shopsphere.git
cd shopsphere
```

#### 3\. Install Dependencies

```bash
npm install
```

#### 4\. Jalankan Server Pengembangan

```bash
ng serve -o
```

Aplikasi akan otomatis terbuka di `http://localhost:4200/`.

-----

## 📜 Lisensi

Proyek ini dilisensikan di bawah [MIT License](https://www.google.com/search?q=LICENSE).