import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const About = () => {

  const navigation =  useNavigation()
  const params = useRoute()

  // params = {"key": "About-ds9hBnIPIqu7oeLafEDjQ", "name": "About", "params": {"state": "Screen data"}, "path": undefined}
  // const {key, name, params} = useRoute()
  
  const go_back_handle = () => {
    navigation.goBack()
  }
  console.log(params)
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>About Screen </Text>
      <TouchableOpacity onPress={go_back_handle}>
        <Text>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default About