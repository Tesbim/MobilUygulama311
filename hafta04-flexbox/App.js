import { View, Text } from 'react-native';

export default function App() {
  return (
      // Hazır tarif 1 — her şeyi ekranın tam ortasına koymak
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text style={{ fontSize: 20, marginBottom: 24 }}>Tam ortadayım</Text>

        {/* Hazır tarif 2 — üç kutuyu yan yana dizmek */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View style={{ width: 80, height: 80, backgroundColor: 'tomato' }} />
          <View style={{ width: 80, height: 80, backgroundColor: 'gold' }} />
          <View style={{ width: 80, height: 80, backgroundColor: 'skyblue' }} />
        </View>
      </View>
  );
}