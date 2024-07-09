import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Advertisement from '../screen/foodOrder/advertisement';
import HomeScreen from '../screen/foodOrder/home';

import ActiveDelete from '../../assets/image/delete-active.png';
import InActiveDelete from '../../assets/image/delete-Inactive.png';
import ActiveHeart from '../../assets/image/hear-active.png';
import InActiveHeart from '../../assets/image/heart-inActive.png';
import ActiveHome from '../../assets/image/home-active.png';
import InActiveHome from '../../assets/image/home-inActive.png';
import ActiveNotify from '../../assets/image/notification-active.png';
import InActiveNotify from '../../assets/image/notification-incactive.png';
import notfound from '../../assets/image/register_Banner.png';

import ProfileComponet from '../screen/foodOrder/profile';
import ViewOrder from '../screen/foodOrder/viewOrder';
import { Life } from '../screen/foodOrder/helperComponets';


const IconsCompoent = ({ bgColor, icons }: any) => {
    return (
        <View style={{ ...styles.iconContainer, backgroundColor: bgColor }}>
            <Image source={icons} style={{ height: 20, width: 20 }} />
        </View>
    )
}

const Auth = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();


    const TabHomeScreen = () => {
        return (
            <Tab.Navigator initialRouteName='Home'
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: styles.bottonDrowerContiner,
                }}>
                <Tab.Screen name='Home' component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (<IconsCompoent icons={focused ? ActiveHome : InActiveHome} bgColor={focused ? '#ED714D' : '#ffff'} />)
                    }}
                />
                <Tab.Screen name='life' component={() => <Life icon={notfound} label={'Life Screen'} />} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<IconsCompoent icons={focused ? ActiveHeart : InActiveHeart} bgColor={focused ? '#ED714D' : '#ffff'} />)
                }} />
                <Tab.Screen name='delete' component={() => <Life icon={notfound} label={'Delete Screen'}/>} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<IconsCompoent icons={focused ? ActiveDelete : InActiveDelete} bgColor={focused ? '#ED714D' : '#ffff'} />)
                }} />
                <Tab.Screen name='notify' component={() => <Life icon={notfound} label={'Notification Screen'} />} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<IconsCompoent icons={focused ? ActiveNotify : InActiveNotify} bgColor={focused ? '#ED714D' : '#ffff'} />)
                }} />
            </Tab.Navigator>
        )
    }

    const MyDrawer = () => {
        return (
            <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}
                drawerContent={props => <ProfileComponet />}
            >
                <Drawer.Screen name="Home" component={TabHomeScreen} />
            </Drawer.Navigator>
        );
    }

    const StackNavigation = () => {
        return (
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name='Welcome' component={Advertisement} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={MyDrawer} options={{ headerShown: false }} />
                <Stack.Screen name='ViewOrder' component={ViewOrder} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }

    return (
        <StackNavigation />
    )
}

const styles = StyleSheet.create({
    bottonDrowerContiner: {
        backgroundColor: '#ffff',
        position: "absolute",
        marginHorizontal: 10,
        borderRadius: 50,
        bottom: 10,
        height: 70,
        shadowOpacity: 0.06,
        paddingHorizontal: 30,
        borderColor: "#ffff",
        shadowColor: '#fff'
    },

    iconContainer: {
        position: "absolute",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        width: 50,
    },

    profileContainer: {
        padding: 14,
        display: "flex",
        flexDirection: "row",
        gap: 10
    },

    title: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        color: "#02111A",
        textAlign: "center"
    },

    hairline: {
        backgroundColor: '#D9DBDD',
        height: 1,
        width: '100%',
        marginTop: 3
    },

});


export default Auth