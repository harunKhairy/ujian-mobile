import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginSCreen from '../screens/LoginScreen'


const AuthStack = createStackNavigator()

export default () => {
    return (
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name='Login' component={LoginSCreen}/>
        </AuthStack.Navigator>
    )
}
