
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {SplashScreen} from '../screens/Splash/SplashScreen'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'

export type RootStackParamList = {
  Splash: undefined; 
  Welcome:undefined
}
// files shift to next foldeer and screen optionsa aswell
//route name.splash varia
const Stack = createNativeStackNavigator<RootStackParamList>()
// const routeNames = {SplashSc}
const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'none',}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigator
