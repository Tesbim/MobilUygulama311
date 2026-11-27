import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      <ScrollView style={styles.ekran}>
        {/* Adımlar buraya eklenecek */}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: '#f4f6fb', padding: 20, paddingTop: 60 },
});