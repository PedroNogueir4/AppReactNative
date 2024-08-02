import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Title } from './components';
import { colors } from './styles/theme.json';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Marketplace from './pages/Marketplace';
import Product from './pages/Marketplace/product';
import Category from './pages/Marketplace/category';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Title bold color="light" variant="big" hasPadding>
                LOOKAPP
            </Title>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const DrawerComponent = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Feed"
            drawerContent={(props) => <CustomDrawerComponent {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: colors.primary,
                drawerActiveTintColor: colors.light,
                drawerInactiveTintColor: colors.light,
                drawerStyle: {
                    backgroundColor: colors.black,
                },
            }}
        >
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="people" color={color} size={17} />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="MarketPlace"
                component={Marketplace}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="tag" color={color} size={17} />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Orders"
                component={Feed}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="basket" color={color} size={17} />
                    ),
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Feed"
                    component={DrawerComponent}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Category"
                    component={Category}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
