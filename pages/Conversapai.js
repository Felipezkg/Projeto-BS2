import { StyleSheet, View, TextInput, ScrollView } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Conversapai() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.msgBox}>
                </View>
                <View style={styles.msgInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Mensagem Aqui.'
                    />
                    <FontAwesome name="send-o" size={35} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
    },

    msgBox: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#ECECEC',
        width: 350,
        height: 600,
        margin: 15,
        borderRadius: 15,
        borderColor: '#CACACA',
        borderWidth: 1,
    },

    msgInput: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },

    input: {
        display: 'flex',
        width: 290,
        height: 40,
        backgroundColor: '#CFCFCF',
        textAlign: 'center',
        borderRadius: 15,
    },

})