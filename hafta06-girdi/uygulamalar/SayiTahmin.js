import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export default function SayiTahmin() {
    // Gizli sayı (notta verilen satır)
    const [gizli, setGizli] = useState(Math.floor(Math.random() * 100) + 1);
    const [tahmin, setTahmin] = useState('');
    const [mesaj, setMesaj] = useState('1 ile 100 arasında bir sayı tuttum. Tahmin et!');
    const [deneme, setDeneme] = useState(0);

    function tahminEt() {
        const sayi = Number(tahmin);

        // Geçersiz giriş: boş ya da 1–100 dışı
        if (tahmin.trim() === '' || isNaN(sayi) || sayi < 1 || sayi > 100) {
            setMesaj('⚠️ Lütfen 1 ile 100 arasında bir sayı yaz.');
            setTahmin('');
            return;
        }

        // Kaçıncı tahmin
        const yeniDeneme = deneme + 1;
        setDeneme(yeniDeneme);

        if (sayi < gizli) {
            setMesaj(`${sayi} → Daha büyük! ⬆️`);
        } else if (sayi > gizli) {
            setMesaj(`${sayi} → Daha küçük! ⬇️`);
        } else {
            setMesaj(`🎉 Bildin! ${yeniDeneme}. tahminde buldun.`);
        }

        // Her tahminden sonra kutuyu temizle
        setTahmin('');
    }

    return (
        <View style={styles.ekran}>
            <Text style={styles.baslik}>🎯 Sayı Tahmin</Text>
            <Text style={styles.mesaj}>{mesaj}</Text>
            <Text style={styles.deneme}>Tahmin sayısı: {deneme}</Text>

            <TextInput
                value={tahmin}
                onChangeText={setTahmin}
                placeholder="Tahminin"
                keyboardType="numeric"
                maxLength={3}
                onSubmitEditing={tahminEt}
                style={styles.kutu}
            />

            <Pressable
                onPress={tahminEt}
                style={({ pressed }) => [styles.buton, pressed && { opacity: 0.7 }]}
            >
                <Text style={styles.butonYazi}>Tahmin Et</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    ekran: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#14213d' },
    baslik: { color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
    mesaj: { color: 'white', fontSize: 20, textAlign: 'center', marginBottom: 8 },
    deneme: { color: '#9fb6d4', fontSize: 16, textAlign: 'center', marginBottom: 24 },
    kutu: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 14,
        fontSize: 22,
        textAlign: 'center',
    },
    buton: { backgroundColor: '#2f6fed', padding: 16, borderRadius: 12, marginTop: 16 },
    butonYazi: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});