import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';

import pai from '../images/pai.png';

export function Chatbaba({ navigation }) {

    const conversa = () => {
        navigation.navigate('Luiz Felipe')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.cardBox}>
                    <View style={styles.infoBox}>
                        <Pressable style={styles.infoBox} onPress={conversa}>
                            <Image style={styles.paiImg} source={pai} />
                            <Text style={styles.userInfo}>Luiz Felipe</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    paiImg: {
        width: 90,
        height: 90,
    },

    infoBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
    },

    cardBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
        width: '80%',
        height: 120,
        borderBottomColor: '#CFCFCF',
        borderBottomWidth: 2,
    },

    userInfo: {
        display: 'flex',
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },

});

