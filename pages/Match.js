import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from 'react-native';

import baba from '../images/baba.png';

import { Feather } from '@expo/vector-icons';

export function Match({ navigation }) {

    const Mensagem = () => {
        navigation.navigate('Chat - Pais')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerBox}>
                    <View style={styles.infoBox}>
                        <Image
                            style={styles.babaImg}
                            source={baba}
                        />
                    </View>
                    <View style={styles.box}>
                        <View style={styles.infoText}>
                            <Text style={styles.atendInfo}>Atendimento</Text>
                        </View>
                        <View style={styles.infoText}>
                            <Text style={styles.avaliation}>4,5</Text>
                            <Feather name="star" size={32} color="gold" />
                        </View>
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Nome:</Text>
                    <Text style={styles.userInfo}>Ana Carolina de S. Alieve</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Cursos:</Text>
                    <Text style={styles.userInfo}>Ciências Contábeis</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Habilitação:</Text>
                    <Text style={styles.userInfo}>Não</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Idade:</Text>
                    <Text style={styles.userInfo}>25</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Horário Disponível:</Text>
                    <Text style={styles.userInfo}>Ex: Seg-Sexta, 09h-18h</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Endereço:</Text>
                    <Text style={styles.userInfo}>Não Sei. :D</Text>
                </View>
                <Pressable style={styles.btn_salv} onPress={Mensagem}>
                    <Text style={styles.textBtn}>ENVIAR MENSAGEM</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
    },

    babaImg: {
        display: 'flex',
        width: 150,
        height: 150,
        alignSelf: 'center',
    },

    infosRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
    },

    infosRow1: {
        display: 'flex',
        flexDirection: 'row',
        gap: 70,
    },

    headerBox: {
        display: 'flex',
        flexDirection: 'row',
    },

    box: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    infoBox: {
        marginTop: 15,
    },

    atendInfo: {
        display: 'flex',
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        fontFamily: 'Comfortaa_400Regular',
    },

    infoText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        gap: 10,
    },

    avaliation: {
        display: 'flex',
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Comfortaa_400Regular',
    },

    boxTitle: {
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },

    userInfo: {
        marginTop: 5,
        fontSize: 14,
        backgroundColor: '#EBEBEB',
        width: 170,
        height: 30,
        padding: 5,
        borderRadius: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },

    miniuserInfo: {
        marginTop: 5,
        fontSize: 14,
        backgroundColor: '#EBEBEB',
        width: 70,
        height: 30,
        padding: 5,
        borderRadius: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },

    btn_salv: {
        marginTop: 25,
        width: 180,
        height: 50,
        backgroundColor: '#C300F3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
    },



})