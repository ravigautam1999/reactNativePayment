/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title="User" onPress={() => navigation.navigate("User", {name: "hello"})}/>
            <Button title="Video Page" onPress={() => navigation.navigate("VideoPage")}/>
        </View>
    )
}

// const look = ({navigation , route}) => {
//     return <Text> this is {route.params.name}</Text>
// }
export default HomeScreen;
