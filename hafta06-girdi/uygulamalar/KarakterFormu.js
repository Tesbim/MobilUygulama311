import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from 'react-native';

const siniflar = ['Savaşçı', 'Büyücü', 'Okçu', 'Şifacı'];

// Kendin dene — sınıfa göre simge
const simgeler = { Savaşçı: '⚔️', Büyücü: '🔮', Okçu: '🏹', Şifacı: '💚' };
export default function KarakterFormu() {
    const [isim, setIsim] = useState('');
    const [yas, setYas] = useState('');
    const [sinif, setSinif] = useState('');
    const [hata, setHata] = useState('');
    const [olusturuldu, setOlusturuldu] = useState(false);

    // Adım 3 — Doğrulama
    function olustur() {
        if (isim.trim() === '') {
            setHata('Lütfen bir ad yaz.');
            return;
        }
        if (isNaN(Number(yas)) || Number(yas) < 10 || Number(yas) > 99) {
            setHata('Yaş 10 ile 99 arasında bir sayı olmalı.');
            return;
        }
        if (sinif === '') {
            setHata('Lütfen bir sınıf seç.');
            return;
        }
        setHata('');
        setOlusturuldu(true);
    }

    // Adım 4 — Özet kartı
    if (olusturuldu) {
        return (
            <View style={styles.kartEkran}>
                <View style={styles.kart}>
                    <Text style={styles.kartSimge}>{simgeler[sinif]}</Text>
                    <Text style={styles.kartIsim}>{isim}</Text>
                    <Text style={styles.kartBilgi}>{sinif} · {yas} yaşında</Text>
                    <Text style={styles.kartBilgi}>Seviye 1 — Macera başlıyor!</Text>
                </View>
                <Pressable
                    onPress={() => {
                        setIsim('');
                        setYas('');
                        setSinif('');
                        setOlusturuldu(false);
                    }}
                    style={styles.olusturButon}
                >
                    <Text style={styles.olusturYazi}>YENİ KARAKTER</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.ekran}>
            <Text style={styles.baslik}>Yeni Karakter</Text>

            {/* Adım 1 — İki kutu */}
            <Text style={styles.etiket}>Ad</Text>
            <TextInput
                value={isim}
                onChangeText={setIsim}
                placeholder="Karakter adı"
                maxLength={16}
                style={styles.kutu}
            />

            <Text style={styles.etiket}>Yaş</Text>
            <TextInput
                value={yas}
                onChangeText={setYas}
                placeholder="Örn. 25"
                keyboardType="numeric"
                maxLength={3}
                style={styles.kutu}
            />

            {/* Adım 2 — Sınıf seçimi (map + Pressable) */}
            <Text style={styles.etiket}>Sınıf</Text>
            <View style={styles.secenekler}>
                {siniflar.map((s) => (
                    <Pressable
                        key={s}
                        onPress={() => setSinif(s)}
                        style={[styles.secenek, sinif === s && styles.secili]}
                    >
                        <Text style={[styles.secenekYazi, sinif === s && styles.seciliYazi]}>{s}</Text>
                    </Pressable>
                ))}
            </View>

            {/* Adım 3 — Hata ve buton */}
            {hata !== '' && <Text style={styles.hata}>⚠️ {hata}</Text>}

            <Pressable
                onPress={olustur}
                style={({ pressed }) => [styles.olusturButon, pressed && { opacity: 0.7 }]}
            >
                <Text style={styles.olusturYazi}>OLUŞTUR</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ekran: { padding: 24, paddingTop: 80, backgroundColor: '#f4f6fb', flexGrow: 1 },
    baslik: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
    etiket: { fontSize: 16, fontWeight: 'bold', marginBottom: 6, marginTop: 12 },
    kutu: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccd3e0',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
    },
    secenekler: { flexDirection: 'row', gap: 8 },
    secenek: { flex: 1, padding: 12, borderRadius: 10, borderWidth: 1, borderColor: '#ccd3e0', backgroundColor: 'white' },
    secili: { backgroundColor: '#2f6fed', borderColor: '#2f6fed' },
    secenekYazi: { textAlign: 'center', fontWeight: 'bold', color: '#333' },
    seciliYazi: { color: 'white' },
    hata: { color: '#c9372c', marginTop: 16, fontWeight: 'bold' },
    olusturButon: { backgroundColor: '#22a06b', padding: 16, borderRadius: 12, marginTop: 24 },
    olusturYazi: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
    kartEkran: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f4f6fb' },
    kart: { backgroundColor: '#1c2b45', borderRadius: 16, padding: 28, alignItems: 'center' },
    kartIsim: { color: 'white', fontSize: 30, fontWeight: 'bold' },
    kartBilgi: { color: '#9fb6d4', fontSize: 16, marginTop: 6 },
    kartSimge: { fontSize: 56, marginBottom: 8 },
});