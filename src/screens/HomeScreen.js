import React, {useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataPhoto } from '../redux/actions'
import {TouchableOpacity} from 'react-native-gesture-handler';




const HomeScreen = () => {

    const { listPhotos } = useSelector(state => state.Auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetDataPhoto())
    }, [])

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList/>
        </View>
    )
} 


const styles = StyleSheet.create({

})

export default HomeScreen