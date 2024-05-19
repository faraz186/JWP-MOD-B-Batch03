import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import Contact from '../../Screens/Contact';
import Profile from '../../Screens/Profile';

const Stack = createNativeStackNavigator();

const App_Navigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator

        initialRouteName='About'
        screenOptions={{
            // headerShown:false
        }}
        // headerShown={false}
        >
            <Stack.Screen
            options={{
                // headerShown:true,
                headerTitle:'Home Screen',
                headerStyle:{
                    backgroundColor:'red'

                    
                },       
                headerTitleStyle:{
                    color:'white'
                }, 
                headerTitleAlign:'center'     

            }}
            name='Home' component={Home} />
            <Stack.Screen name='Contact' component={Contact} /> 
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App_Navigation
