import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

// Adım 1, 4, 5 — Tekrar kullanılabilir oyun butonu
function OyunButonu({ baslik, renk, onPress, onLongPress, pasif }) {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={pasif}
            style={({ pressed }) => [
                styles.buton,
                { backgroundColor: renk },
                pressed && styles.basili,
                pasif && styles.pasif,
            ]}
        >
            <Text style={styles.butonYazi}>{baslik}</Text>
        </Pressable>
    );
}

export default function SavasEkrani() {
    const [mesaj, setMesaj] = useState('Bir hamle seç');
    const [mana, setMana] = useState(50);
    const [dusmanCan, setDusmanCan] = useState(100);

    // Kendin dene 2 — Düşmanın canı 0 olunca butonlar yerine Zafer!
    if (dusmanCan === 0) {
        return (
            <View style={styles.ekran}>
                <Text style={styles.zafer}>🏆 Zafer!</Text>
                <OyunButonu
                    baslik="🔄 Yeni Savaş"
                    renk="#22a06b"
                    onPress={() => {
                        setDusmanCan(100);
                        setMana(50);
                        setMesaj('Bir hamle seç');
                    }}
                />
            </View>
        );
    }

    return (
        <View style={styles.ekran}>
            {/* Kendin dene 1 — Düşmanın canı */}
            <Text style={styles.dusman}>👹 Düşman canı: {dusmanCan} / 100</Text>
            <Text style={styles.mesaj}>{mesaj}</Text>
            <Text style={styles.mana}>Mana: {mana} / 100</Text>

            <OyunButonu
                baslik="⚔️ Saldır (10 hasar)"
                renk="#c9372c"
                onPress={() => {
                    setDusmanCan(dusmanCan - 10 < 0 ? 0 : dusmanCan - 10);
                    setMesaj('Düşmana saldırdın!');
                }}
            />
            <OyunButonu
                baslik="🛡️ Savun"
                renk="#2f6fed"
                onPress={() => setMesaj('Savunmaya geçtin.')}
                onLongPress={() => setMesaj('🛡️ Kalkanı kaldırdın! (uzun basma)')}
            />
            <OyunButonu
                baslik="🔥 Büyü (30 mana, 30 hasar)"
                renk="#7b4fd6"
                pasif={mana < 30}
                onPress={() => {
                    setMana(mana - 30);
                    setDusmanCan(dusmanCan - 30 < 0 ? 0 : dusmanCan - 30);
                    setMesaj('Ateş topu fırlattın!');
                }}
            />
            <OyunButonu
                baslik="💤 Dinlen (+20 mana)"
                renk="#22a06b"
                onPress={() => {
                    setMana(mana + 20 > 100 ? 100 : mana + 20);
                    setMesaj('Biraz dinlendin.');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ekran: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#14213d' },
    mesaj: { color: 'white', fontSize: 22, textAlign: 'center', marginBottom: 32 },
    mana: { color: '#9fb6d4', fontSize: 16, textAlign: 'center', marginBottom: 16 },
    buton: { paddingVertical: 16, borderRadius: 12, marginBottom: 12 },
    basili: { opacity: 0.7, transform: [{ scale: 0.97 }] },
    pasif: { opacity: 0.35 },
    butonYazi: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
    dusman: { color: '#ff8a80', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
    zafer: { color: '#ffd166', fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 32 },
});