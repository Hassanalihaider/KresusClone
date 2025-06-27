/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App