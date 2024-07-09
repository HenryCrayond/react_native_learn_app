import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Advertisement from '../screen/foodOrder/advertisement';
import HomeScreen from '../screen/foodOrder/home';
import ViewOrder from '../screen/foodOrder/viewOrder';
import Test from '../screen/foodOrder/test';

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import ActiveHome from '../../assets/image/home-active.png';
import InActiveHome from '../../assets/image/home-inActive.png';
import ActiveHeart from '../../assets/image/hear-active.png';
import InActiveHeart from '../../assets/image/heart-inActive.png';
import ActiveNotify from '../../assets/image/notification-active.png';
import InActiveNotify from '../../assets/image/notification-incactive.png';
import ActiveDelete from '../../assets/image/delete-active.png';
import InActiveDelete from '../../assets/image/delete-Inactive.png';


const IconsCompoent = ({ bgColor, icons }: any) => {
    return (
        <View style={{ ...styles.iconContainer, backgroundColor: bgColor }}>
            <Image source={icons} style={{ height: 20, width: 20 }} />
        </View>
    )
}
const Auth = () => {
    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const TabHomeScreen = () => {
        return (
            <Tab.Navigator
                initialRouteName="a"
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: styles.bottonDrowerContiner,
                }}
            >
                <Tab.Screen
                    name="a"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconsCompoent
                                icons={focused ? ActiveHome : InActiveHome}
                                bgColor={focused ? '#ED714D' : '#ffff'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="b"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconsCompoent
                                icons={focused ? ActiveHeart : InActiveHeart}
                                bgColor={focused ? '#ED714D' : '#ffff'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="d"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconsCompoent
                                icons={focused ? ActiveDelete : InActiveDelete}
                                bgColor={focused ? '#ED714D' : '#ffff'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="c"
                    component={Test}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconsCompoent
                                icons={focused ? ActiveNotify : InActiveNotify}
                                bgColor={focused ? '#ED714D' : '#ffff'}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    };

    const StackNavigator = () => {
        return (
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Advertisement} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={TabHomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ViewOrder" component={ViewOrder} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            {/* <Drawer.Navigator initialRouteName='Cantact'>
                <Drawer.Screen name="Home" component={StackNavigator} />
                <Drawer.Screen name="Contact" component={ViewOrder} />
            </Drawer.Navigator> */}
            <StackNavigator/>
        </NavigationContainer>
    );
};
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
    }
});


export default Auth