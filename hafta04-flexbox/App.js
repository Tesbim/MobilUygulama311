import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      <ScrollView contentContainerStyle={styles.ekran}>
        {/* Üst kısım: görsel ve isim */}
        <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.avatar}
        />
        <Text style={styles.isim}>Kahraman Kaan</Text>
        <Text style={styles.sinif}>Seviye 7 · Savaşçı</Text>

        {/* Ortadaki üç kutu: yan yana */}
        <View style={styles.satir}>
          <View style={styles.kutu}>
            <Text style={styles.deger}>120</Text>
            <Text>Can</Text>
          </View>
          <View style={styles.kutu}>
            <Text style={styles.deger}>45</Text>
            <Text>Güç</Text>
          </View>
          <View style={styles.kutu}>
            <Text style={styles.deger}>30</Text>
            <Text>Hız</Text>
          </View>
        </View>

        {/* Alt kısım: açıklama */}
        <Text style={styles.aciklama}>
          Kaan, kuzey dağlarından gelen cesur bir savaşçıdır.
        </Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  ekran: { alignItems: 'center', padding: 24, paddingTop: 80 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
  isim: { fontSize: 26, fontWeight: 'bold' },
  sinif: { fontSize: 16, color: 'gray', marginBottom: 24 },
  satir: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  kutu: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eef3ff',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  deger: { fontSize: 22, fontWeight: 'bold' },
  aciklama: { marginTop: 24, fontSize: 16, textAlign: 'center' },
});