import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeBottomTab from './HomeBottomTab'
import LogoutScreen from '../screens/LogoutScreen'
import { Icon } from 'react-native-elements'

const DrawerNav = createDrawerNavigator()

export default () => {
    return (
        <DrawerNav.Navigator
            initialRouteName='HomeBottomTab'
            drawerPosition='right'
            drawerType='slide'
            drawerStyle={{
                backgroundColor: '#fff',
                borderColor: '#cfcfcf',
                borderWidth: 1
            }}
            overlayColor={0}
            drawerContentOptions={{
                activeTintColor: 'black',
                activeBackgroundColor: '#fff',
                justifyContent: 'flex-end'
            }}
            >
            <DrawerNav.Screen
                name='HomeButtonTab'
                component={HomeBottomTab}
                options={{
                    drawerLabel: () => null,
                    swipeEnabled: true
                }}
                />
            <DrawerNav.Screen
                name='Logout'
                component={LogoutScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon name={'cog'} type='font-awesome' size={25} color={tintColor} />
                    )
                }}
                />
        </DrawerNav.Navigator>
    )
}