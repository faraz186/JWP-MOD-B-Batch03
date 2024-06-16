import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'

export const Firebase_Authentication_Component = () => {

    const [data, setData] = useState({})


    const on_change_handle = (field, value) => {

        setData((pre) => ({ ...pre, [field]: value }))

    }


    const submit_handle = () => [
        auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            })

    ]

    // console.log(data)



    return (
        <View style={styles.container}>

            <View style={{ gap: 20 }}>
                <Text style={styles.title}>
                    Signup
                </Text>
                <View style={styles.input_container}>
                    <TextInput onChangeText={(e) => on_change_handle('email', e)} style={styles.input} placeholder='Enter email address' />
                    <TextInput onChangeText={(e) => on_change_handle('password', e)} style={styles.input} placeholder='Enter password' secureTextEntry={true} />
                </View>

                <TouchableOpacity onPress={submit_handle} style={styles.button}>
                    <Text style={styles.button_text}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 20,
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center'

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24
    },
    input_container: {
        gap: 20,

    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#7cacf8',
        paddingVertical: 15,
        borderRadius: 10

    },
    button_text: {
        textAlign: 'center',
        color: 'white'
    }
})

