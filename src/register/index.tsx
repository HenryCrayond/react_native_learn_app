import { useState } from "react";
import { Alert, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import LayoutImg from '../../assets/image/bg_layout.png';
import DropDown from '../../assets/image/dropdown.png';
import Flag from '../../assets/image/flag.png';
import BannerImg from '../../assets/image/register_Banner.png';


const RegisterScreen = () => {

    const [isFocused, setIsFocused] = useState('');
    const [formValue, setFormValues] = useState({
        name: "",
        mobile: "",
        email: "",
        address: ""
    });

    const handeChangeText = (e: string, key: string) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: e
        }))
    }

    const handleFocusInput = (key: string) => {
        setIsFocused(key)
    }

    const handleFocuLeave = () => {
        setIsFocused('')
    }

    const handlepress = () => Alert.alert(
        'Register Succesfuly',
         `
           Name:${formValue.name}
           Mobile:${formValue.mobile}
           Email:${formValue.email}
           Address:${formValue.address} 
         `,
        [
            {
                text: 'Ok',
                onPress: () => undefined,
                style: 'cancel',
            },
        ],
    );

    return (
        <ImageBackground source={LayoutImg} resizeMode="stretch" style={styles.image} >
            <ScrollView style={{ flex: 1, width: "100%" }}>
                <View style={styles.container}>
                    <View style={styles.bannerContainer}>
                        <Image source={BannerImg} />
                        <Text style={{ ...styles.bannerText, width: 180 }}>Earn loyalty for every purchase</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={{ ...styles.bannerText, fontSize: 16 }}>Profile details</Text>
                        <Text style={{ ...styles.subText, width: 224 }}>Please provide your basic details to proceed further</Text>

                        <View style={{ ...styles.inputRoot, marginTop: 20 }}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(e) => handeChangeText(e, 'name')}
                                onFocus={(e) => handleFocusInput('name')}
                                onSubmitEditing={handleFocuLeave}
                            />
                            <Text
                                style={{
                                    ...styles.inputLabel,
                                    transform: isFocused === 'name' || formValue?.name ? "translateY(-30px)" : "translateY(-12px)",
                                    transformOrigin: "transform 0.3s ease"
                                }}>Name</Text>
                        </View>

                        <View style={{ ...styles.inputRoot, marginTop: 4, backgroundColor: "#E6EAEB", borderColor: "#ffff", padding: 10, height: 62, borderRadius: 8 }}>
                            <View style={styles.mobileInputRoot}>
                                <View style={styles.dropdown}><Image source={Flag} /><Text style={{ ...styles.subText, color: "#02111A" }}>+966</Text><Image source={DropDown} /></View>
                                <View style={styles.verticleLine}></View>
                                <View style={{ ...styles.inputRoot, marginTop: 14 }}>
                                    <TextInput
                                        style={{ ...styles.inputStyle, width: '78%', borderColor: "#E6EAEB" }}
                                        keyboardType={'phone-pad'}
                                        onFocus={() => handleFocusInput('mobile')}
                                        onSubmitEditing={handleFocuLeave}
                                        onChangeText={(e) => handeChangeText(e, 'mobile')}
                                    />
                                    <Text style={{
                                        ...styles.inputLabel,
                                        transform: isFocused === 'mobile' || formValue.mobile ? "translateY(-30px)" : "translateY(-14px)",
                                        transformOrigin: "transform 0.3s ease"
                                    }}>Mobile</Text>
                                </View>

                            </View>
                        </View>

                        <View style={{ ...styles.inputRoot, marginTop: 16 }}>
                            <TextInput
                                style={styles.inputStyle}
                                onFocus={() => handleFocusInput('email')}
                                onSubmitEditing={handleFocuLeave}
                                onChangeText={(e) => handeChangeText(e, 'email')}
                            />
                            <Text style={{
                                ...styles.inputLabel,
                                transform: isFocused === 'email' || formValue.email ? "translateY(-30px)" : "translateY(-12px)",
                                transformOrigin: "transform 0.3s ease"
                            }}>Email</Text>
                        </View>

                        <View style={{ ...styles.inputRoot, marginTop: 6, marginBottom: 14 }}>
                            <TextInput
                                style={{ ...styles.inputStyle, height: 110 }}
                                onFocus={() => handleFocusInput('address')}
                                onSubmitEditing={handleFocuLeave}
                                onChangeText={(e) => handeChangeText(e, 'address')}
                            />
                            <Text
                                style={{
                                    ...styles.inputLabel,
                                    top: -75,
                                    transform: isFocused === 'address' || formValue.address ? "translateY(-14px)" : "translateY(-10px)",
                                    transformOrigin: "transform 0.3s ease"
                                }}>Address</Text>
                        </View>

                        <TouchableHighlight touchSoundDisabled={false} style={styles.btnStyle} onPress={handlepress}>
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    bannerContainer: {
        marginTop: 45,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center"
    },

    bannerText: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: "NotoSans-Bold",
        lineHeight: 20,
        color: "#02111A",
        marginTop: 12,
        textAlign: "center"
    },

    subText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: "NotoSans-Regular",
        lineHeight: 20,
        color: "#4E585E",
        marginTop: 12,
        marginBottom: 10,
        textAlign: "center"
    },

    formContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        marginTop: 26,
        padding: 16,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40
    },

    mobileInputRoot: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1
    },

    dropdown: {
        width: "24%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    },

    verticleLine: {
        height: '60%',
        width: 1,
        backgroundColor: '#B3B8BB',
    },

    inputRoot: {
        width: "100%",
        position: "relative",
    },

    inputLabel: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'NotoSans-Regular',
        lineHeight: 16,
        color: "#4E585E",
        top: -26,
        left: 16
    },

    inputStyle: {
        height: 62,
        borderStartWidth: 1,
        borderLeftWidth: 1,
        borderEndWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 8,
        borderColor: "#D9DBDD",
        paddingLeft: 16,
        color: "#02111A",
        fontSize: 14,
        fontFamily: "NotoSans-Regular"
    },

    btnStyle: {
        width: "100%",
        backgroundColor: "#30AF89",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 8,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        paddingBottom: 10,
        bottom: 10
    },

    btnText: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        color: "#ffff",
    },

    image: {
        flex: 1,
        zIndex: 1,
        justifyContent: 'center',
    },
})
export default RegisterScreen