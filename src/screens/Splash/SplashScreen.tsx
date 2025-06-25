// src/screens/SplashScreen.tsx
import React, { useEffect } from 'react'
import { View,StyleSheet } from 'react-native'
import Background from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
     // will navigate 
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}> 
      <Background />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
})