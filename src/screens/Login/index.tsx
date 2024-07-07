import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native'
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { ButtonInterface } from '../../components/ButtonInterface';
import { LoginTypes } from '../../navigations/login.navigations';
import { colors } from '../../styles/globalstyle';

export interface IAuthenticate {
    email?: string;
    password?: string;
}
{/* pag 1*/}
export function Login({ navigation }: LoginTypes) {
    const [data, setData] = useState<IAuthenticate>();
    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleRegister() {
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView>

                    <Text style={styles.title} >Login</Text>

                    <View style={styles.formRow}>

                        <MaterialIcons name="email" style={styles.icon} />

                        <TextInput
                            placeholderTextColor={colors.third}
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i })}
                        />
                    </View>
                    <View style={styles.formRow} >
                        <Entypo name="key" style={styles.icon} />

                        <TextInput
                            placeholderTextColor={colors.third}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
                    <ButtonInterface title='Login' type='primary' onPressI={handleSignIn} />
                    <ButtonInterface title='Cadastre-se'
                        type='secondary' onPressI={handleRegister} />
                </KeyboardAvoidingView>
            </View>
        );
    }

