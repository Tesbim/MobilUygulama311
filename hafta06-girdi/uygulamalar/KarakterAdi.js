import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function KarakterAdi() {
    const [isim, setIsim] = useState('');

    return (
        <View style={styles.ekran}>
            {/* Adım 1 — Kutu ve state */}
            <Text style={styles.etiket}>Karakterinin adı</Text>
            <TextInput
                value={isim}
                onChangeText={setIsim}
                placeholder="Örn. Gölge Avcısı"
                maxLength={12}
                style={styles.kutu}
            />

            {/* Adım 2-3 — Karakter sayacı, 10 ve üstünde turuncu */}
            <Text style={[styles.sayac, isim.length >= 10 && { color: 'orange', fontWeight: 'bold' }]}>
                {isim.length} / 12
            </Text>

            {/* Adım 4 — Canlı karakter kartı */}
            <View style={styles.kart}>
                <Text style={styles.kartIkon}>🧙</Text>
                <Text style={styles.kartIsim}>
                    {isim.length > 0 ? isim : 'Adsız Kahraman'}
                </Text>
                <Text style={styles.kartAlt}>Seviye 1 · Çaylak</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ekran: { flex: 1, padding: 24, paddingTop: 100, backgroundColor: '#f4f6fb' },
    etiket: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
    kutu: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccd3e0',
        borderRadius: 10,
        padding: 14,
        fontSize: 18,
    },
    sayac: { textAlign: 'right', marginTop: 6, color: 'gray' },
    kart: { marginTop: 32, backgroundColor: '#1c2b45', borderRadius: 16, padding: 24, alignItems: 'center' },
    kartIkon: { fontSize: 48 },
    kartIsim: { fontSize: 26, fontWeight: 'bold', color: 'white', marginTop: 8 },
    kartAlt: { fontSize: 14, color: '#9fb6d4', marginTop: 4 },
});