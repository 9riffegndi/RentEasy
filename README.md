# Rent Easy

Rent Easy adalah aplikasi berbasis web untuk layanan rental mobil sport. Proyek ini hanya mencakup bagian Front-End tanpa backend. Aplikasi ini dibangun menggunakan React.js, Tailwind CSS, Daisy UI, dan menggunakan Local Storage serta file JSON untuk menyimpan data.

## Fitur Utama
- **Daftar Mobil Sport**: Tampilkan daftar mobil sport yang tersedia untuk disewa.
- **Detail Mobil**: Informasi lengkap tentang mobil seperti harga, spesifikasi, dan foto.
- **Pemesanan**: Formulir sederhana untuk pemesanan mobil.
- **Data Persistent**: Data pengguna dan status pemesanan disimpan menggunakan Local Storage.
- **Login dan Register**: Pengguna dapat mendaftar dan masuk untuk menggunakan fitur aplikasi.
- **Menghapus Pesanan**: Pengguna dapat membatalkan pesanan yang telah dibuat.
- **Menghapus Akun**: Pengguna dapat menghapus akun mereka jika diperlukan.
- **Mengganti Identitas Akun**: Fitur untuk mengubah data akun seperti nama, email, atau kata sandi.
- **Melihat History**: Pengguna dapat melihat riwayat pesanan mereka.
- **Ganti Tema**: Opsi untuk mengganti tema aplikasi (misalnya, tema terang dan gelap).

## Tech Stack
- **React.js**: Framework JavaScript untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Framework CSS untuk styling yang cepat dan responsif.
- **Daisy UI**: Komponen tambahan untuk styling yang lebih mudah.
- **Local Storage**: Untuk menyimpan data secara lokal pada browser pengguna.
- **JSON File**: Untuk menyimpan data statis seperti daftar mobil.

## Cara Menjalankan Proyek

### 1. Clone Repository
```bash
git clone <URL_REPOSITORY>
cd rent-easy
```

### 2. Install Dependencies
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/):
```bash
npm install
```

### 3. Menjalankan Proyek
```bash
npm start
```
Aplikasi akan berjalan di `http://localhost:3000`.

## Data Mobil (Contoh JSON)
File `cars.json` akan menyimpan data seperti ini:
```json
[
  {
    "id": 1,
    "gambarBrand": "https://img.icons8.com/?size=100&id=38732&format=png&color=000000",
    "merek": "Ferrari",
    "model": "F8 Tributo",
    "tahun": 2022,
    "mesin": "3.9L V8",
    "tenaga_kuda": 710,
    "kapasitas_tempat_duduk": 2,
    "transmisi": "Otomatis",
    "kapasitas_bagasi": "200L",
    "bahan_bakar": "Bensin",
    "asuransi": "Perlindungan Penuh",
    "harga_sewa_per_hari": 1500,
    "minimalrentalperhari": 5,
    "gambar": "https://www.pngarts.com/files/8/Red-Ferrari-F8-Tributo-PNG-Download-Image.png",
    "gambarDetail": [
      "https://www.pngarts.com/files/8/Red-Ferrari-F8-Tributo-PNG-Download-Image.png"
    ]
  }
]
```

## Penggunaan Tailwind CSS dan Daisy UI
### Instalasi
Tambahkan Tailwind dan Daisy UI ke proyek:
```bash
npm install tailwindcss daisyui
```
### Konfigurasi Tailwind
Tambahkan `daisyui` ke dalam `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

