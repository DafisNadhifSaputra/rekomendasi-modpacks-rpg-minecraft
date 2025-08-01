# React Modpack Guide

Aplikasi React.js untuk panduan pemilihan modpack Minecraft RPG dengan fitur tier list interaktif, modal detail, dan perbandingan modpack.

## Fitur

- ✨ **Tier List Dinamis**: Filter berdasarkan aspek berbeda (Quest, RPG, Visual, Performance, dll.)
- 🎮 **Detail Modpack**: Modal dengan informasi lengkap setiap modpack
- ⚖️ **Perbandingan**: Bandingkan multiple modpack side-by-side
- 📱 **Responsive Design**: Optimized untuk desktop dan mobile
- 🎨 **Modern UI**: Menggunakan Tailwind CSS dengan tema gaming

## Teknologi

- **React 18**: Framework JavaScript modern
- **Vite**: Build tool yang cepat
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Press Start 2P & Inter fonts

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### 3. Build untuk Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Struktur Project

```
src/
├── components/           # React components
│   ├── Header.jsx       # Header dengan judul utama
│   ├── TierList.jsx     # Tier list dengan filter
│   ├── ModpackCard.jsx  # Card untuk setiap modpack
│   ├── Modal.jsx        # Modal detail modpack
│   ├── CompareModal.jsx # Modal perbandingan
│   ├── CompareButton.jsx# Tombol floating compare
│   └── Footer.jsx       # Footer
├── data.js              # Data modpack dan konfigurasi
├── App.jsx              # Main component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Cara Menggunakan

1. **Browse Modpacks**: Lihat semua modpack di grid utama
2. **Filter Tier List**: Gunakan tombol filter untuk melihat ranking berdasarkan aspek tertentu
3. **Lihat Detail**: Klik card atau tombol "Lihat Detail" untuk informasi lengkap
4. **Compare Modpacks**: 
   - Centang checkbox di pojok kanan atas card
   - Pilih minimal 2 modpack
   - Klik tombol "Bandingkan" yang muncul di bawah
5. **Navigate**: Klik item di tier list untuk highlight card yang sesuai

## Kustomisasi

### Menambah Modpack Baru

Edit file `src/data.js` dan tambahkan object modpack baru dengan struktur:

```javascript
{
  id: 'unique-id',
  title: 'Nama Modpack',
  tiers: { overall: 'S', quest: 'A', rpg: 'S', visual: 'A', performance: 'B', singleplayer: 'S', multiplayer: 'A' },
  shortDesc: 'Deskripsi singkat...',
  tags: ['Tag1', 'Tag2'],
  details: {
    quest: { summary: '...', pros: [...], cons: [...] },
    rpg: { summary: '...', pros: [...], cons: [...] },
    visual: { summary: '...', pros: [...], cons: [...] },
    performance: { summary: '...', pros: [...], cons: [...] }
  }
}
```

### Mengubah Warna Tier

Edit CSS variables di `src/index.css`:

```css
:root {
  --color-s-tier: #ff79c6;  /* Pink untuk S tier */
  --color-a-tier: #50fa7b;  /* Green untuk A tier */
  --color-b-tier: #f1fa8c;  /* Yellow untuk B tier */
  --color-c-tier: #ffb86c;  /* Orange untuk C tier */
  --color-d-tier: #ff5555;  /* Red untuk D tier */
}
```

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## License

MIT License - Feel free to use this project for your own modpack guides!
