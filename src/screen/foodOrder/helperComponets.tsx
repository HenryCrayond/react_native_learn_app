import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BottomButton } from './advertisement';


export const Life = ({ icon ,label}: any) => {
    const navigation = useNavigation()

    return (
        <View style={styles.root}>
            <View style={styles.profileContainer}>
                <Image source={icon} style={{ height: 200, width: 340 }} />
                <Text style={styles.bannerText}>{label}</Text>
                <BottomButton label={'Go Back'} handlepress={() => navigation.goBack()} />
            </View>
            <View style={{ flex: 3 }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    profileContainer: {
        flex: 8,
        width: '40%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    bannerText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 20,
        color: "#02111A",
        marginTop: 30,
        textAlign: "center"
    },
});