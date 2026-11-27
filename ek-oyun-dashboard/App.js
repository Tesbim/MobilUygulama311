import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
const etkinlikler = [
  { id: 1, metin: 'Boss savaşını kazandın', zaman: '2 saat önce' },
  { id: 2, metin: 'Yeni rozet: Hız Ustası', zaman: 'Dün' },
  { id: 3, metin: '3. seviyeyi bitirdin', zaman: '2 gün önce' },
  { id: 4, metin: 'Günlük görevi tamamladın', zaman: '3 gün önce' },
  { id: 5, metin: '500 altın topladın', zaman: 'Geçen hafta' },
];
function StatKarti({ deger, baslik, renk }) {
  return (
      <View style={[styles.kart, { borderLeftColor: renk }]}>
        <Text style={styles.kartDeger}>{deger}</Text>
        <Text style={styles.kartBaslik}>{baslik}</Text>
      </View>
  );
}
export default function App() {
  return (
      <ScrollView style={styles.ekran}>
        {/* 1. Üst bar */}
        <View style={styles.ustBar}>
          <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.avatar}
          />
          <View>
            <Text style={styles.selam}>Merhaba, Kaan!</Text>
            <Text style={styles.altYazi}>Bugün de oynayalım mı?</Text>
          </View>
        </View>
        {/* 2. İstatistik kartları */}
        <View style={styles.kartlar}>
          <StatKarti deger="2.480" baslik="Puan" renk="#7c3aed" />
          <StatKarti deger="63" baslik="Galibiyet" renk="#0ea5e9" />
          <StatKarti deger="940" baslik="Altın" renk="#f59e0b" />
          <StatKarti deger="17" baslik="Rozet" renk="#ec4899" />
        </View>
        {/* 3. İlerleme çubuğu */}
        <View style={styles.bolum}>
          <View style={styles.seviyeSatir}>
            <Text style={styles.bolumBaslik}>Seviye 7</Text>
            <Text style={styles.yuzde}>%65</Text>
          </View>
          <View style={styles.cubukDis}>
            <View style={[styles.cubukIc, { width: '65%' }]} />
          </View>
        </View>
        {/* 4. Son etkinlikler */}
        <View style={styles.bolum}>
          <Text style={styles.bolumBaslik}>Son Etkinlikler</Text>
          {etkinlikler.map((e) => (
              <View key={e.id} style={styles.etkinlik}>
                <Text>• {e.metin}</Text>
                <Text style={styles.zaman}>{e.zaman}</Text>
              </View>
          ))}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: '#f4f6fb', padding: 20, paddingTop: 60 },
  ustBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  avatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
  selam: { fontSize: 22, fontWeight: 'bold' },
  altYazi: { fontSize: 14, color: 'gray' },
  kartlar: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  kart: {
    width: '48%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 5,
    marginBottom: 12,
  },
  kartDeger: { fontSize: 24, fontWeight: 'bold' },
  kartBaslik: { fontSize: 14, color: 'gray', marginTop: 4 },

  bolum: { backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 12 },
  seviyeSatir: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  bolumBaslik: { fontSize: 16, fontWeight: 'bold' },
  yuzde: { fontSize: 16, color: '#2f6fed', fontWeight: 'bold' },
  cubukDis: { height: 12, backgroundColor: '#e3e7f0', borderRadius: 6 },
  cubukIc: { height: 12, backgroundColor: '#2f6fed', borderRadius: 6 },

  etkinlik: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',

  },
  zaman: { fontSize: 12, color: 'gray' },

});