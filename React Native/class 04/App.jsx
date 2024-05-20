import React, { useEffect, useState } from 'react'
import App_Navigation from './config/App_Navigation'

const App = () => {
  const [hide_splash_screen, setHide_splash_screen] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHide_splash_screen(true)
    }, 3000);
  }, [])
  
  // return hide_splash_screen ? <App_Navigation /> : 
  //   <Splash_Screen /> 
   return <App_Navigation />
  
}

export default App



// cd  android 
//  gradlew clean
// cd  ..

//  cd android && gradlew clean && cd ..