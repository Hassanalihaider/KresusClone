// src/navigators/RootNavigator.tsx
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Splash/SplashScreen'


const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />

    </Stack.Navigator>
  )
}

export default RootNavigator
