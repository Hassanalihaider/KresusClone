import React, { useEffect } from 'react'
import { View,StyleSheet } from 'react-native'
import Background from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

export const SplashScreen = () => {
  const navigation = useNavigation()
// navigation.navigate ("Splash")
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

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})