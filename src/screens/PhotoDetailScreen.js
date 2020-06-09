import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Spacer from '../support/Spacer'



const PhotoDetailScreen = ({catPic }) => {
    
    const { url } = catPic
    return (
        <Spacer>
            <View>
                <Image
                    source={{ uri: url}}
                    style={{ height: 150, width: 150}}
                    />
                <Text>DetailScreen</Text>
            </View>
        </Spacer>
    )
}

const styles = StyleSheet.create({

})

export default PhotoDetailScreen