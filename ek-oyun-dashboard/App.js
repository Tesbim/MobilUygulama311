import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

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
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: '#f4f6fb', padding: 20, paddingTop: 60 },
  ustBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  avatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
  selam: { fontSize: 22, fontWeight: 'bold' },
  altYazi: { fontSize: 14, color: 'gray' },
});