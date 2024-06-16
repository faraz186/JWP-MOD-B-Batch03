import AsyncStorage from "@react-native-async-storage/async-storage"
import { Text, TouchableOpacity } from "react-native"


export const Async_Storage_Component = () => {

    const store_data_handle = async () => {

    await  AsyncStorage.setItem('@user_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
    }


    const get_data_handle = async () => {

    const data = await AsyncStorage.getItem('@user_token')
    console.log(data)
    }

    const remove_item_handle = async () => {

    await AsyncStorage.removeItem('@user_token')
    // console.log(data)
    }

    return <>

    <TouchableOpacity onPress={store_data_handle}>
        <Text style={{fontSize:25}}>
            Store Data
        </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={get_data_handle}>
        <Text style={{fontSize:25}}>
            Get Data
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={remove_item_handle}>
        <Text style={{fontSize:25}}>
            Remove Item
        </Text>
    </TouchableOpacity>
    </>

}