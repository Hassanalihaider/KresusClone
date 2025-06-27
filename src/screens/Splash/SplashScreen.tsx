import React, { useEffect ,useState } from 'react'
import { View,StyleSheet,InteractionManager } from 'react-native'
import Background from '../../components/Background'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigators/RootNavigator'

import SplashScreenStyles from '../../styles/SplashScreen.styles'
//types defines of nav
export const SplashScreen = ({navigation}:any) => {
 //const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [showContent, setShowContent] = useState(false)

useEffect(() => {
  const timer = setTimeout(() => {
    setShowContent(true)
    setTimeout(() => {
      navigation.navigate('Welcome')
    }, 500) 
  }, 1000)

  return () => clearTimeout(timer)
}, [])



  return (
    <View  style={SplashScreenStyles.container}> 
      <Background showContent={showContent} />
    </View>
  )
}



