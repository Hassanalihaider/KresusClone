// src/navigators/RootNavigator.tsx
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Splash/SplashScreen'
import BoardingScreen from '../screens/Onboarding/BoardingScreen'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
       <Stack.Screen name="Boarding" component={BoardingScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigator
