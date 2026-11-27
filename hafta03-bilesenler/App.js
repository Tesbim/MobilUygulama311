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

export default function App() {
  return (
      <View style={styles.ekran}>
        <Text style={styles.baslik}>Skor Tablosu</Text>
        <OyuncuKarti isim="Ayşe" puan={40} seviye={3} />
        <OyuncuKarti isim="Veli" puan={15} seviye={1} />
        <OyuncuKarti isim="Zeynep" puan={70} seviye={5} />
      </View>
  );
}

const styles = StyleSheet.create({
  ekran: { flex: 1, padding: 24, marginTop: 60 },
  baslik: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  kart: { backgroundColor: '#eef3ff', padding: 16, borderRadius: 10, marginBottom: 10 },
  isim: { fontSize: 18, fontWeight: 'bold' },
});