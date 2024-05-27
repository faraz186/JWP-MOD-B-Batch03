import AsyncStorage from "@react-native-async-storage/async-storage"
import { Text, TouchableOpacity } from "react-native"

export const Async_Storage_Component = () => {


    const store_data = async () => {
        const data = {
          user:'user001',
          class:'02'
        }
        await AsyncStorage.setItem('@user_data', JSON.stringify(data))
      }
    
      const get_stored_data = async () => {
         const data =  await AsyncStorage.getItem('@user_data')
    
         console.log(data)
      }
    
      const get_remove_data = async () => {
         const data =  await AsyncStorage.removeItem('@user_data')
    
         console.log(data)
      }
    
    
      const get_all_stored_keys = async () => {
         const data =  await AsyncStorage.getAllKeys()
    
         console.log(data)
      }
    
    
    
      return<>
      {/* <AntDesign name="home" size={30} /> */}
      <TouchableOpacity onPress={store_data}>
        <Text>
          Click to Store Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={get_stored_data}>
        <Text>
          Click to Get Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={get_remove_data}>
        <Text>
          Click to Remove Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={get_all_stored_keys}>
        <Text>
          Click to Stored Data Keys
        </Text>
      </TouchableOpacity>
        {/* <Text>
          Hello World
        </Text> */}
    
        </>
    
    }