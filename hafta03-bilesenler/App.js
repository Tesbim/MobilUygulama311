import { StyleSheet, Text, View } from 'react-native';

// Adım 1 — Kart bileşeni: isim ve puan alır
function OyuncuKarti({ isim, puan }) {
  return (
      <View style={styles.kart}>
        <Text style={styles.isim}>{isim}</Text>
        <Text>Puan: {puan}</Text>
      </View>
  );
}

// Adım 2 — App içinde üç kez kullan
export default function App() {
  return (
      <View style={styles.ekran}>
        <Text style={styles.baslik}>Skor Tablosu</Text>
        <OyuncuKarti isim="Ayşe" puan={40} />
        <OyuncuKarti isim="Veli" puan={15} />
        <OyuncuKarti isim="Zeynep" puan={70} />
      </View>
  );
}

// Adım 3 — Stiller
const styles = StyleSheet.create({
  ekran: { flex: 1, padding: 24, marginTop: 60 },
  baslik: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  kart: { backgroundColor: '#eef3ff', padding: 16, borderRadius: 10, marginBottom: 10 },
  isim: { fontSize: 18, fontWeight: 'bold' },
});