import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({ children }) {
  return (
    <View style={styles.inputContainer}>
     {children}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 300,
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 6,
    borderRadius: 1,
    




  }
})