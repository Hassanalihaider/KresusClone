import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images } from '../assets'

const { width, height } = Dimensions.get('window')

const Background = () => {
  return (
    <LinearGradient
      colors={['#080C4C', '#0E1799']}
      style={styles.gradient}
    >
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

      <View style={styles.bottomContainer}>
        <Image source={Images.waves} style={styles.waves} resizeMode="stretch" />
        <Image source={Images.land1} style={styles.land1} resizeMode="contain" />
        <Image source={Images.land2} style={styles.land2} resizeMode="contain" />
      </View>
    </LinearGradient>
  )
}

export default Background

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: height * 0.1,
    width: width * 0.5,
    height: height * 0.2,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  waves: {
    width: width,
    height: height * 0.15,
  },
  land1: {
    position: 'absolute',
    left: 0,
    bottom: height * 0.13,
    width: width * 0.4,
    height: height * 0.1,
  
  },
  land2: {
    position: 'absolute',
    right: 0,
    bottom: height * 0.13,
    width: width * 0.65,
    height: height * 0.1,
  },
})
