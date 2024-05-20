import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Bottom_Tab_Navigation } from './Bottom_Tab_Navigation';
import { Getting_Started } from '../../Screens/Getting_Started';
import { Login } from '../../Screens/Login';
import { Signup } from '../../Screens/Signup';


const Stack = createNativeStackNavigator();

const App_Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator  screenOptions={{headerShown:true}} >

                <Stack.Screen name='Getting-Started' component={Getting_Started} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Bottom-Tabs' component={Bottom_Tab_Navigation} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App_Navigation