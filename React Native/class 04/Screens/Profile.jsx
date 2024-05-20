import { View, Text, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'

const Profile = () => {
  const [input_value, setInput_value] = useState('')
  console.log('input_value', input_value)
  return (
    <>
    {/* <ImageBackground resizeMode='cover' source={{uri:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} >
      <View style={{paddingVertical:20, paddingHorizontal:10}}>
      <Text style={{color:'white'}}>
      To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
      </Text>
      <Text style={{color:'white'}}>
      To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
      </Text>
      <Text style={{color:'white'}}>
      To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
      </Text>
      </View>
    </ImageBackground> */}



    {/* <View style={{paddingVertical:20, paddingHorizontal:10}}>
      <Text style={{color:'black'}}>
      To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
      </Text>
      <Text style={{color:'black'}}>
      To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
      </Text>
      </View> */}


      <View>
        <TextInput 
        // keyboardType=''
        
        onChangeText={setInput_value}
        // onChangeText={(e)=>setInput_value(e)}
        placeholder='Enter your email'
          />
      </View>
    </>
  )
}

export default Profile