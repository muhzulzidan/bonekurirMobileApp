import React, { useCallback, FC } from 'react'
import { View, StyleSheet, Text, Image, SafeAreaView, TouchableHighlight, Linking, Alert, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface Nav {
    navigation?: any
}
interface Props {
    url: string
    children: any
}

const wa = "https://wa.wizard.id/22e296";


const OpenURLButton: FC<Props> = ({ url, children }) => {

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <TouchableOpacity onPress={handlePress} >
        {children}
    </TouchableOpacity>;
};


export const HomeScreens: FC<Nav> = ({ navigation }) => {
    return (
        <View style={styles.imageBackground} >
            <SafeAreaView style={styles.header}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/logo.png')}
                />
            </SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Pilih Driver mu !
                </Text>

                <OpenURLButton url={wa}>
                    <View style={styles.bar}>
                        <Image
                            style={styles.people}
                            source={require('../assets/people.png')}
                        />
                        <Text style={styles.text}>
                            Aco
                        </Text>
                        <View style={[styles.circle, styles.active]}></View>
                    </View>
                </OpenURLButton>
                <OpenURLButton url={wa}>
                    <View style={styles.bar}>
                        <Image
                            style={styles.people}
                            source={require('../assets/people.png')}
                        />
                        <Text style={styles.text}>
                            Aco
                        </Text>
                        <View style={[styles.circle, styles.inactive]}></View>
                    </View>
                </OpenURLButton>
                {/* <View style={styles.urlContainer}>
                    <TouchableHighlight
                        style={styles.urlButton}
                       
                        onPress={() => navigation.navigate('Urls')}
                    >
                        <Text style={styles.urlText}>
                            Pergi ke Halaman Url
                        </Text>
                    </TouchableHighlight>
                </View> */}
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 60,
    },
    header: {
        backgroundColor: "#F4B62A",
        paddingTop: 40,
        padding: 20,
    },
    container: {
        // justifyContent:"center",
        // alignItems:"center",
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
    },
    heading: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        paddingBottom: 20,
    },
    text: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontSize: 25,
        color: "black",
    },
    bar: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    people: {
        marginRight: 20,
        width: 40,
        height: 30,
    },
    circle: {
        borderRadius: 10,
        width: 15,
        height: 15,
        // alignContent: "center",
        position: 'absolute',
        right: 25
    },
    active: {
        backgroundColor: "#93FF3E",
    },
    inactive: {
        backgroundColor: "#7e7e7a"
    },
    urlContainer: {
        paddingTop: 20,
    },
    urlButton: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        alignItems: "center"

    },
    urlText: {
        color: "white",
    },
})
