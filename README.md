# 🏛️ Mansekai - Character Archives

**Mansekai - Character Archives** adalah sebuah platform web interaktif bergaya **monokromik elegan** yang dirancang untuk mendokumentasikan arsip karakter, biografi, *lore*, serta latar belakang tokoh-tokoh fiktif dari berbagai belahan dunia (Series).

---

## ✨ Fitur Utama

- **🎨 Desain Monokromik Premium & Responsif**: Tampilan visual bertema *dark mode* elegan menggunakan kombinasi font *Cinzel*, *Playfair Display*, dan *Inter*.
- **🔍 Pencarian Real-Time (Search & Filter)**: Cari karakter berdasarkan nama, seri/kota, profesi, atau kata kunci biografi secara instan.
- **📄 Sistem Paginasi Pas**: Pembagian rincian kartu karakter secara teratur (6 item per halaman) untuk navigasi yang rapi.
- **🖼️ Kartu Karakter Interaktif**: Efek *grayscale-to-color* halus saat hover pada gambar karakter.
- **📱 Navigasi Responsif & Dropdown**: Lengkap dengan menu hamburger untuk perangkat mobile dan modal interaktif (Monolith Statement).
- **🔗 Integrasi URL Parameter**: Dukungan pencarian via URL query (contoh: `?search=Paris`).

---

## 👥 Roster Karakter Saat Ini

Arsip ini mencakup berbagai latar belakang karakter unik dari berbagai seri:

| Seri / Kota | Nama Karakter | Profesi / Label |
| :--- | :--- | :--- |
| **Moscow Series** | Anastasia Petrova | Military Specialist |
| **Shanghai Series** | Li Mei Lin | Toko Barang Antik Apprentice |
| **Seoul Series** | Han Seo-yeon | Swimming Coach |
| **Paris Series** | Elise Moreau | Fashion Designer / Needle Weaver |
| **Bologna Series** | Sofia Moretti | Culinary Master / Blade Striker |
| **London Series** | Katarina Grace | Out-Boxer / Street Striker |
| **Tokyo Series** | Momona Matsumoto | Stage Idol & Fashion Model |
| **Bandung Series** | Titania Felycia | Visual Artist & Illustrator |
| **Bandung Series** | Firman Hidayat | Trader & Developer |

---

## 📁 Struktur Direktori Proyek

```text
.
├── index.html                  # Halaman utama (Arsip & Roster Karakter)
├── README.md                   # Dokumentasi proyek
├── character/                  # Detail halaman individu karakter
│   ├── anastasia_petrova.html
│   ├── li_mei_lin.html
│   ├── han_seo-yeon.html
│   ├── elise_moreau.html
│   ├── sofia_moretti.html
│   ├── katarina_grace.html
│   ├── momona_matsumoto.html
│   ├── titania_felycia.html
│   └── firman_hidayat.html
└── img/                        # Aset gambar karakter
    ├── Anastasia_Petrova/
    ├── Li_Mei_Lin/
    ├── Han_Seo-yeon/
    ├── Elise_Moreau/
    ├── Sofia_Moretti/
    ├── Katarina_Grace/
    ├── Momona_Matsumoto/
    ├── Titania_Felycia/
    └── Firman_Hidayat/
```

---

## 🚀 Cara Menjalankan

1. **Clone / Download** repositori ini ke komputer Anda.
2. Buka berkas `index.html` langsung di peramban web (*browser*) favorit Anda (Chrome, Edge, Firefox, Safari).
3. *Atau* jalankan lokal server sederhana (misal menggunakan ekstensi *Live Server* di VS Code atau Python HTTP Server):
   ```bash
   python -m http.server 8000
   ```
   Lalu buka `http://localhost:8000` di browser.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur halaman web semantik.
- **CSS3**: Variable CSS, CSS Grid, Flexbox, & Media Queries untuk tampilan responsif.
- **JavaScript (Vanilla ES6)**: Logika pencarian, paginasi, kontrol modal, dan filter data dinamis tanpa dependensi *library* luar.
- **Google Fonts**: *Cinzel*, *Playfair Display*, *Inter*.
- **Font Awesome 6**: Ikonografi modern.

---

## 📄 Lisensi

© 2026 **Mansekai Archives**. All rights reserved.
*"From shadow and steel, stories are etched into eternity."*
