import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.baslik}>Merhaba DOT311!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  baslik: { fontSize: 40, fontWeight: 'bold' },
});