import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'
import DrawerNav from './src/navigation/DrawerNav'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { KeepLogin } from './src/redux/actions'
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';


const AppInit = (props) => {

    const { username } = useSelector(state => state.Auth)
    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.getItem('token')
        .then(response => {
            dispatch(KeepLogin(response))
        }).catch(error => {
            console.log(error)
        })
    }, [])
    
    return (
        <NavigationContainer>
            {!username ? <AuthStack/> : <DrawerNav/> }
        </NavigationContainer>
    )
}

export default AppInit