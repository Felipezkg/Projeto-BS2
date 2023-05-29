import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import Loading from '../images/Dual-Ring-1s-200px.gif';
import Family from '../images/Family-stress-amico.png';

export function Procura({ navigation }) {

    const Match = () => {
        navigation.navigate('Match!')
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable}  onPress={Match}>
                <Image
                    style={styles.familyImg}
                    source={Family}
                />

                <Image
                    style={styles.loadingImg}
                    source={Loading}
                />

                <Text style={styles.text}>PROCURANDO...</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    pressable: {
        alignItems: 'center',
    },

    text: {
        marginTop: 30,
        fontSize: 18,
        fontFamily: 'Comfortaa_600SemiBold',
    },

    loadingImg: {
        marginTop: 50,
        width: 70,
        height: 70,
    },

    familyImg: {
        width: 350,
        height: 350,
    },
})