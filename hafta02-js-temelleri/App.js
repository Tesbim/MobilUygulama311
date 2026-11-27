import { StyleSheet, Text, View } from 'react-native';

const oyuncular = [
  { isim: "Ayşe", puan: 40 },
  { isim: "Zeynep", puan: 70 },
  { isim: "Mehmet", puan: 55 },
];

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.baslik}>Skor Tablosu</Text>
        {oyuncular.map((o) => (
            <Text key={o.isim} style={styles.satir}>
              {`${o.isim}: ${o.puan} puan`}
            </Text>
        ))}

        <Text style={styles.altBaslik}>50 puan üstü</Text>
        {oyuncular.filter((o) => o.puan > 50).map((o) => (
            <Text key={o.isim} style={styles.satir}>{`${o.isim}: ${o.puan}`}</Text>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 48, justifyContent: 'center' },
  baslik: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  altBaslik: { fontSize: 22, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
  satir: { fontSize: 20, marginBottom: 8 },
});