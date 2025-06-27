import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {SplashScreen, HomeScreen} from '../screens/index'

const routeNames = {
  splash: "Splash",
  homeScreen: "Home"
}
const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name= {routeNames.splash} component={SplashScreen} /> */}
      <Stack.Screen name={routeNames.homeScreen} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigator
