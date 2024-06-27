import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import LayoutImg from '../../assets/bg_layout.png';
import DropDown from '../../assets/dropdown.png';
import Flag from '../../assets/flag.png';
import BannerImg from '../../assets/register_Banner.png';


const RegisterScreen = () => {

    const [isFocused, setIsFocused] = useState('');

    const handleFocusInput = (key:string) => {
        setIsFocused(key)
        console.log('is focus');
    }
    const handleFocuLeave = () => {
        setIsFocused('')
        console.log('is leave');
    }

    return (
        <ImageBackground source={LayoutImg} resizeMode="stretch" style={styles.image} >
            <ScrollView style={{ flex: 1, width: "100%" }}>
                <View style={styles.container}>
                    <View style={styles.bannerContainer}>
                        <Image source={BannerImg} />
                        <Text style={styles.bannerText}>Earn loyalty for every purchase</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.bannerText}>Profile details</Text>
                        <Text style={styles.subText}>Please provide your basic details to proceed further</Text>
                        
                        <View style={{...styles.inputRoot,marginTop:20}}>
                            <TextInput style={styles.inputStyle} onFocus={(e)=>handleFocusInput('name')} onSubmitEditing={handleFocuLeave} />
                            <Text style={{
                                ...styles.inputLabel,
                                transform: isFocused ==='name' ? "translateY(-30px)" : "translateY(-12px)",
                                transformOrigin: "transform 0.3s ease"
                            }}>Name</Text>
                        </View>
                        
                        <View style={{ ...styles.inputRoot,marginTop:6, backgroundColor: "#E6EAEB", borderColor: "#ffff", padding: 10, height: 62,borderRadius:8 }}>
                            <View style={styles.mobileInputRoot}>
                                <View style={styles.dropdown}><Image source={Flag} /><Text>+966</Text><Image source={DropDown} /></View>
                                <View style={styles.verticleLine}></View>
                                <View style={{...styles.inputRoot,marginTop:14}}>
                                    <TextInput style={{...styles.inputStyle,width:'78%',borderColor:"#E6EAEB"}} keyboardType={'phone-pad'} onFocus={()=>handleFocusInput('mobile')} onSubmitEditing={handleFocuLeave} />
                                    <Text style={{
                                        ...styles.inputLabel,
                                        transform: isFocused ==='mobile' ? "translateY(-30px)" : "translateY(-14px)",
                                        transformOrigin: "transform 0.3s ease"
                                    }}>Mobile</Text>
                                </View>

                            </View>
                        </View>

                        <View style={{...styles.inputRoot,marginTop:16}}>
                            <TextInput style={styles.inputStyle} onFocus={()=>handleFocusInput('email')} onSubmitEditing={handleFocuLeave} />
                            <Text style={{
                                ...styles.inputLabel,
                                transform: isFocused ==='email' ? "translateY(-30px)" : "translateY(-12px)",
                                transformOrigin: "transform 0.3s ease"
                            }}>Email</Text>
                        </View>

                        <View style={{...styles.inputRoot,marginTop:10 ,marginBottom:8}}>
                            <TextInput style={{ ...styles.inputStyle, height: 110 }} onFocus={()=>handleFocusInput('address')} onSubmitEditing={handleFocuLeave} />
                            <Text
                                style={{
                                    ...styles.inputLabel,
                                    top: -75,
                                    transform: isFocused ==='address' ? "translateY(-14px)" : "translateY(-10px)",
                                    transformOrigin: "transform 0.3s ease"
                                }}>Address</Text>
                        </View>

                        <View style={styles.btnStyle}>
                            <Text style={styles.btnText}>Register</Text>
                        </View>
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
        lineHeight: 20,
        color: "#02111A",
        marginTop: 12,
        width: 180,
        textAlign: "center"
    },

    subText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: "#4E585E",
        marginTop: 12,
        width: 214,
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
        paddingLeft:16
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
        paddingTop: 10,
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