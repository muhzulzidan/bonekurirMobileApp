import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();

export default function ProfileScreen() {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };
    console.log(user.providerData[0].photoURL)
    console.log(user.providerData[0].email)
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.row}>
                <Text style={styles.title}>Welcome {user.email}!</Text>
                <IconButton
                    name='logout'
                    size={24}
                    color='#fff'
                    onPress={handleSignOut}
                />
            </View>
            <Text style={styles.text}></Text>
            <Text style={styles.text}>Your UID is: {user.uid} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6B62A',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    },
    text: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff'
    }
});