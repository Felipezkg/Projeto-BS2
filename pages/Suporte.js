import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import error from '../images/404-Error-bro.png';

export function Suporte() {
    return (
        <View>
            <Image
                style={styles.errorImg}
                source={error}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
    },

    errorImg: {
        display: 'flex',
        alignSelf: 'center',
        top: 100,
        width: 450,
        height: 450,
    },
})