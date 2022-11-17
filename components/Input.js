import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ style, ...restProps }) {
  return (
      <TextInput 
      blurOnSubmit
      autoCapitalize='none'
      autoCorrect={false}
      keyboardType="numeric"
      maxLength={2}
      style={{ ...styles.input, ...style}}
      {...restProps}
      />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
  },
})