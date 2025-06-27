import React from 'react'
import { TextInput, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const AppInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#ADD2FD"
      style={styles.input}
    />
  )
}

export default AppInput

const styles = StyleSheet.create({
  input: {
    width: width * 0.9,  // 90% of screen width
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#0734A9',
    color:'#FFFFFF',
    fontSize: 16,
  },
})
