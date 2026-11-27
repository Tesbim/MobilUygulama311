// Uygulama 2 — Envanter Filtreleme ve İstatistik
// filter, map, reduce + ok fonksiyonları

// Adım 1 — Envanteri tanımla
const envanter = [
    { ad: "Kılıç", tur: "silah", deger: 150, nadir: true },
    { ad: "Kalkan", tur: "zirh", deger: 90, nadir: false },
    { ad: "İksir", tur: "sarf", deger: 20, nadir: false },
    { ad: "Asa", tur: "silah", deger: 300, nadir: true },
];

// Adım 2 — Sadece silahlar
const silahlar = envanter.filter(e => e.tur === "silah");
console.log(silahlar.map(e => e.ad));

// Adım 3 — Nadir eşyaların adları (filter + map zinciri)
const nadirAdlar = envanter
    .filter(e => e.nadir)
    .map(e => e.ad);
console.log(nadirAdlar);

// Adım 4 — Toplam değer (reduce)
const toplamDeger = envanter.reduce((toplam, e) => toplam + e.deger, 0);
console.log(`Toplam değer: ${toplamDeger}`);

// Geliştirme — Değeri 100'den büyük olanlar
envanter
    .filter(e => e.deger > 100)
    .forEach(e => console.log(`${e.ad} (${e.deger})`));