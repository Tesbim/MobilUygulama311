// Uygulama 1 — Oyuncu Skor Listesi
// const/let, dizi, map, forEach, template literal

// Adım 1 — Veriyi tanımla
const oyuncular = [
    { isim: "Ayşe", puan: 40 },
    { isim: "Veli", puan: 15 },
    { isim: "Zeynep", puan: 70 },
    { isim: "Mehmet", puan: 55 },
];

// Adım 2 — Her oyuncu için satır metni (map + template literal)
const satirlar = oyuncular.map(o => `${o.isim}: ${o.puan} puan`);
console.log(satirlar);

// Adım 3 — Tek tek yazdır (forEach)
oyuncular.forEach(o => console.log(`${o.isim} -> ${o.puan}`));

// Adım 4 — En yüksek puanı bul
let enYuksek = oyuncular[0];
oyuncular.forEach(o => {
    if (o.puan > enYuksek.puan) {
        enYuksek = o;
    }
});
console.log(`Lider: ${enYuksek.isim} (${enYuksek.puan})`);

// Geliştirme — Büyükten küçüğe sırala, ilk 3'ü yazdır
const sirali = [...oyuncular].sort((a, b) => b.puan - a.puan);
sirali.slice(0, 3).forEach((o, i) => console.log(`${i + 1}. ${o.isim}`));