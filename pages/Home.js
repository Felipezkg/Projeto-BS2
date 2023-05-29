import { StyleSheet, Text, View, Pressable } from 'react-native';
//------------------------------------------------------------------------------------------------------------------
export function Home({ navigation }) {

    const Perfilpai = () => {
        navigation.navigate('Perfil - Pais')
    }

    const Chatpai = () => {
        navigation.navigate('Chat - Pais')
    }

    const ProcurarBaba = () => {
        navigation.navigate('Preferências')
    }
    //------------------------------------------------------------------------------------------------------------------

    const Perfilbaba = () => {
        navigation.navigate('Perfil - Babás')
    }

    const Chatbaba = () => {
        navigation.navigate('Chat - Babás')
    }
    //------------------------------------------------------------------------------------------------------------------

    const Suporte = () => {
        navigation.navigate('Suporte')
    }


    return (
        <View style={styles.container}>
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>Pai / Mãe</Text>
                <Pressable style={styles.btn_login} onPress={Perfilpai}>
                    <Text style={styles.textBtn}>Meu Perfil</Text>
                </Pressable>
                <Pressable style={styles.btn_login} onPress={Chatpai}>
                    <Text style={styles.textBtn}>Mensagens</Text>
                </Pressable>
                <Pressable style={styles.btn_login} onPress={ProcurarBaba}>
                    <Text style={styles.textBtn}>Procurar Babás</Text>
                </Pressable>
            </View>
            <Text style={styles.traco}>____________________________________________</Text>
            <View style={styles.infoBox2}>
                <Text style={styles.boxTitle}>Babás</Text>
                <Pressable style={styles.btn_login} onPress={Perfilbaba}>
                    <Text style={styles.textBtn}>Meu Perfil</Text>
                </Pressable>
                <Pressable style={styles.btn_login} onPress={Chatbaba}>
                    <Text style={styles.textBtn}>Mensagens</Text>
                </Pressable>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.supTitle}>Está com Problemas?</Text>
                <Pressable style={styles.btn_sup} onPress={Suporte}>
                    <Text style={styles.textBtn}>SUPORTE</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    traco: {
        maxWidth: '70%',
        fontWeight: 'bold',
    },

    infoBox: {
        marginTop: 100,
        margin: 15,
        alignItems: 'center',
    },

    infoBox2: {
        marginTop: 30,
        margin: 15,
        alignItems: 'center',
    },

    boxTitle: {
        fontSize: 25,
        fontFamily: 'Comfortaa_400Regular',
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
    },

    btn_login: {
        marginTop: 10,
        width: 185,
        height: 50,
        backgroundColor: '#00CCE1',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_sup: {
        marginTop: 10,
        width: 185,
        height: 50,
        backgroundColor: '#F34D00',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    supTitle: {
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },
})