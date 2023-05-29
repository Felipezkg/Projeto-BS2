import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from 'react-native';

import { useState } from 'react';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import baby from '../images/Happy-baby-rafiki.png';

export function Procurapref({ navigation }) {

    const Procurar = () => {
        navigation.navigate('Procura')
    }

    const [estado, setEstado] = useState();

    const radio_props = [
        { label: 'Sim', estado: 0 },
        { label: 'Não', estado: 1 }
    ];

    const mudarEstado = () => {
        setEstado(!estado)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.babyImg}
                        source={baby}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Quando Precisa:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Ex: 15/07/2023'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Horário:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Ex: 09h-18h'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Nome:</Text>
                    <TextInput
                        style={styles.textInput}
                        type='name'
                        placeholder='Nome'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Habilitação:</Text>
                    <View style={styles.radio}>
                        <RadioForm
                            radio_props={radio_props}
                            formHorizontal={true}
                            buttonColor={'#000'}
                            buttonSize={10}
                            buttonOuterSize={23}
                            labelStyle={{ fontSize: 20, padding: 8, fontFamily: 'Comfortaa_400Regular' }}
                            initial={0}
                            onPress={mudarEstado}
                        />
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Observação:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Ex: Levar na aula de balé...'
                        placeholderTextColor="gray"
                    />
                </View>
                <Pressable style={styles.btn_cad} onPress={Procurar}>
                    <Text style={styles.textBtn}>PROCURAR</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    babyImg: {
        width: 250,
        height: 250,
    },

    infoBox: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
    },

    radio: {
        display: 'flex',
        margin: 18,
    },

    infoBox2: {
        display: 'flex',
    },

    boxTitle: {
        fontSize: 17,
        fontFamily: 'Comfortaa_400Regular',
    },

    textInput: {
        marginTop: 5,
        width: 200,
        height: 30,
        padding: 3,
        backgroundColor: '#EBEBEB',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderRadius: 5,
    },

    btn_cad: {
        marginTop: 15,
        width: 185,
        height: 50,
        backgroundColor: '#61D6FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
        alignSelf: 'center'
    },


})