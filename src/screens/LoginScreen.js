import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Spacer from '../support/Spacer'
import {Input, Icon, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { LoginSuccess } from '../redux/actions'


const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

    const onClickBtnLogin = () => dispatch(LoginSuccess(username))
    return (
        <Spacer>
            <Icon name="home" type="material" color="#3DDC84" size={50} />
            <Input placeholder="Username" onChangeText={setUsername}/>

            <Button
                    title='Login'
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    onPress={onClickBtnLogin}
                    />
        </Spacer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    },
    inputStyle: {
        marginTop: 50,
        marginBottom: 60,
        width: '100%'
    }
})

export default LoginScreen