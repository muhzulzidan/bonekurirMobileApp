import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button as RNButton, TouchableOpacity, Image } from 'react-native';

import { Button, InputField, ErrorMessage } from '../components';
import Firebase from '../config/firebase';

const auth = Firebase.auth();

interface SignupScreenProps{
    navigation : any
}

export const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [signupError, setSignupError] = useState('');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    const onHandleSignup = async () => {
        try {
            if (email !== '' && password !== '') {
                await auth.createUserWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setSignupError(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.LogoContainer}>
                <Image style={styles.Logo} source={require('../assets/logo.png')} />
                <Text style={styles.LogoText}>Bone Kurir</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.title}>Create new account</Text>
                <InputField
                    inputStyle={{
                        fontSize: 14
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        marginBottom: 20
                    }}
                    leftIcon='email'
                    placeholder='Enter email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText={( text: any) => setEmail(text)}
                />
                <InputField
                    inputStyle={{
                        fontSize: 14
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        marginBottom: 20
                    }}
                    leftIcon='lock'
                    placeholder='Enter password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={passwordVisibility}
                    textContentType='password'
                    rightIcon={rightIcon}
                    value={password}
                    onChangeText={(text : string) => setPassword(text)}
                    handlePasswordVisibility={handlePasswordVisibility}
                />
                {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
                <Button
                    onPress={onHandleSignup}
                    backgroundColor='#F6B62A'
                    title='Signup'
                    titleColor='#fff'
                    titleSize={20}
                    containerStyle={{
                        marginBottom: 24
                    }}
                />
                <View style={styles.goRegister}>
                    <Text>if you have not register, </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.GoSignUp}> Go to Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    LogoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
        paddingTop: 50,
        backgroundColor: "#F6B62A"
    },
    Logo: {
        width: 60,
        height: 75,
    },
    LogoText: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
        color: "#fff",
    },
    container2: {
        flex: 2,
        paddingHorizontal: 15,
    },
    GoSignUp: {
        color: "#F6B62A"
    },
    goRegister: {
        marginTop: 40,
        alignSelf: "center",
        flexDirection: "row"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "Roboto",
        color: '#F6B62A',
        alignSelf: 'center',
        paddingBottom: 24,

    }
});