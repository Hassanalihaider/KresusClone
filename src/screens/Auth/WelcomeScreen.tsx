import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated } from 'react-native'
import Background from '../../components/Background'
import AppInput from '../../components/AppInput'
import WelcomeStyles from '../../styles/WelcomeScreen.styles'
import { Images } from '../../assets'

const WelcomeScreen = () => {
  const [showTextInput, setShowTextInput] = useState(false)

  const logoScale = useRef(new Animated.Value(1)).current
  const logoTranslateY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 0.6,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(logoTranslateY, {
        toValue: -100,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start()

    const timer = setTimeout(() => {
      setShowTextInput(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Background showContent showLogo={false}>
      <Animated.Image
        source={Images.logo}
        style={[
          WelcomeStyles.logo,
          {
            transform: [
              { scale: logoScale },
              { translateY: logoTranslateY },
            ],
          },
        ]}
        resizeMode="contain"
      />

      {showTextInput && (
        <View style={WelcomeStyles.content}>
          <Text style={WelcomeStyles.heading}>Your Base</Text>
          <Text style={WelcomeStyles.heading}>Control Center.</Text>
          <Text style={WelcomeStyles.subheading}>Earn and Explore with heightened security.</Text>
          <Text style={WelcomeStyles.caption}>Signup or Login</Text>
          <AppInput placeholder="Enter your email" />
        </View>
      )}
    </Background>
  )
}


export default WelcomeScreen

