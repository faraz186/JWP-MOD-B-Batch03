
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Async_Storage_Component } from './Componets/Async_Storage_Component'
import { Camera_Gallery_Component } from './Componets/Camera_Gallery_Componet'

 const App = () => {



  return <>
  {/* <Async_Storage_Component /> */}
  <Camera_Gallery_Component />
  </>

  

 }

export default App
