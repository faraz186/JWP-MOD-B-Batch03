import { Image, Text, TouchableOpacity, View } from "react-native"
import { Card } from "./components/Card"
import { Styled_Component } from "./components/Styled_Component"
import { Scrollview_Component } from "./components/Scrollview_Component"

const App = () => {
  // const press_handle = () => {
  //   console.log('clicked...!')
  // }
  return <> 
    <Image resizeMode='cover'  source={require('./assets/Screenshot-01.png')}/>
    <Image resizeMode='cover' width={200} height={200} source={{uri:'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg'}}/>
    <Text>Hello World! </Text>
    <TouchableOpacity onPress={press_handle}>
      <Text>Click here</Text>
    </TouchableOpacity>

    <Card />

    <Styled_Component />

    <Scrollview_Component />
  </>
}


export default App