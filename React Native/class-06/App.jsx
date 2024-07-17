import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Async_Storage_Component } from './components/Async_Storage_Component'
import { Image_Picker_Component } from './components/Image_Picker_Component'
import { Geo_Location_Component } from './components/Geo_Location_Component'   
import { Nativebase_Components } from './components/Nativebase_Components'
import { Firebase_Authentication_Component } from './components/Firebase_Authentication_Component'
const App = () => {
  return (   
    // <NativeBaseProvider>
    <View style={{flex:1}}>
      {/* <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20 }}>REACT NATIVE APP</Text> */}

      {/* <Async_Storage_Component /> */}
      {/* <Image_Picker_Component /> */}   

      {/* <Geo_Location_Component /> */}

      {/* <Nativebase_Components /> */}

      <Firebase_Authentication_Component />
    </View>
    // </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})
