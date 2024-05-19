import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function Home() {

  const navigation = useNavigation()

  
  const navigation_handle =() => {
    navigation.navigate('About', {state:'Screen data'})

  }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Home</Text>
      <TouchableOpacity onPress={navigation_handle}>
        <Text>
          Go to About
        </Text>
      </TouchableOpacity>
    </View>
  )
}