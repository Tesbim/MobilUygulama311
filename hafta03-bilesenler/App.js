import { StyleSheet, Text, View } from 'react-native';

function OyuncuKarti({ isim, puan, seviye }) {
  return (
      <View style={styles.kart}>
        <Text style={styles.isim}>{isim}</Text>
        <Text>Puan: {puan}</Text>
        <Text>Seviye: {seviye}</Text>
      </View>
  );
}

// Alıştırma — Kendi oyunuma uygun yeni bileşen: eşya adı ve değeri
function EsyaKarti({ ad, deger }) {
  return (
      <View style={styles.esyaKart}>
        <Text style={styles.isim}>{ad}</Text>
        <Text>Değer: {deger} altın</Text>
      </View>
  );
}

export default function App() {
  return (
      <View style={styles.ekran}>
        <Text style={styles.baslik}>Skor Tablosu</Text>
        <OyuncuKarti isim="Ayşe" puan={40} seviye={3} />
        <OyuncuKarti isim="Veli" puan={15} seviye={1} />
        <OyuncuKarti isim="Zeynep" puan={70} seviye={5} />

        <Text style={styles.baslik}>Envanter</Text>
        <EsyaKarti ad="Kılıç" deger={150} />
        <EsyaKarti ad="Kalkan" deger={90} />
        <EsyaKarti ad="Asa" deger={300} />
      </View>
  );
}

const styles = StyleSheet.create({
  ekran: { flex: 1, padding: 24, marginTop: 60 },
  baslik: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  kart: { backgroundColor: '#eef3ff', padding: 16, borderRadius: 10, marginBottom: 10 },
  esyaKart: { backgroundColor: '#fff4e5', padding: 16, borderRadius: 10, marginBottom: 10 },
  isim: { fontSize: 18, fontWeight: 'bold' },
});