import { Text, View } from 'react-native';

// Bileşen, isim bilgisini alır (destructuring)
function Selam({ isim }) {
  return <Text>Merhaba, {isim}!</Text>;
}

export default function App() {
  return (
      <View style={{ marginTop: 80, padding: 20 }}>
        <Selam isim="Ayşe" />
        <Selam isim="Veli" />
        <Selam isim="Zeynep" />
      </View>
  );
}