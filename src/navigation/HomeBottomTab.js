import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PhotoDetailScreen from '../screens/PhotoDetailScreen'


const Tab = createBottomTabNavigator()

const HomeBottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={( { route } ) => ({
                tabBarIcon: ( {color, focused, size} ) => {
                    let iconName
                    let sizes = size

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home'
                        sizes = focused ? 30 : size
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account'
                        sizes = focused ? 30 : size
                    }
                    return (
                        <Icon name={iconName} size={sizes} type='materialcommunityicons' color={color}/>
                    )
                }
            })} 
            tabBarOptions={{
                activeTintColor: 'salmon',
                inactiveTintColor: 'gray',
                showLabel: true
            }}
            >
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

export default HomeBottomTab