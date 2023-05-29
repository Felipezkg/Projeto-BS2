import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';

import pai from '../images/pai.png';

export function Perfilpai({ navigation }) {

    const handleSave = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.infoBox}>
                    <Image
                        style={styles.paiImg}
                        source={pai}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Nome:</Text>
                    <Text style={styles.userInfo}>Luiz Felipe de S. Alieve</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Telefone:</Text>
                    <Text style={styles.userInfo}>(48)9 9178-2923</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Endereço:</Text>
                    <Text style={styles.userInfo}>Rua Lira da Rosa</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Data de Nascimento:</Text>
                    <Text style={styles.userInfo}>30/07/1995</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>CPF:</Text>
                    <Text style={styles.userInfo}>000.000.000-00</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>E-Mail:</Text>
                    <Text style={styles.userInfo}>felipezkg@gmail.com</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Senha:</Text>
                    <Text style={styles.userInfo}>123456</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Quantidade de Filhos:</Text>
                    <Text style={styles.userInfo}>0 :D</Text>
                </View>
                <Pressable style={styles.btn_salv} onPress={handleSave}>
                    <Text style={styles.textBtn}>SALVAR</Text>
                </Pressable>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    paiImg: {
        width: 190,
        height: 190,
        alignSelf: 'center',
    },

    infoBox: {
        marginTop: 15,
    },

    boxTitle: {
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },

    userInfo: {
        marginTop: 5,
        fontSize: 14,
        backgroundColor: '#EBEBEB',
        width: 270,
        height: 30,
        textAlign: 'center',
        padding: 5,
        borderRadius: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },

    btn_group: {
        flexDirection: 'row',
        gap: 30,
    },

    btn_salv: {
        marginTop: 25,
        width: 140,
        height: 50,
        backgroundColor: '#20EC00',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
    },

    pwAlign: {
        flexDirection: 'row',
        gap: 10,
    },

    icon: {
        top: 5,
    },

})