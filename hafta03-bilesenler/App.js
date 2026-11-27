import { Text, View } from 'react-native';

// 1) Bileşeni yaz
function Selam() {
  return <Text>Merhaba, hoş geldin!</Text>;
}

// 2) App içinde etiket gibi kullan
export default function App() {
  return (
      <View style={{ marginTop: 80, padding: 20 }}>
        <Selam />
        <Selam />
        <Selam />
      </View>
  );
}