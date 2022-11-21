import { StyleSheet, Text, View } from 'react-native'
import colors from "../constants/colors";
import React from 'react'

export default function Header({title, newStyles}) {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...newStyles}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingTop: 36,
    height: 120,
    alignItems: "center",
    justifyContent: "center",

  },
  headerTitle: {
    color: colors.secondary,
    fontSize: 40,
  }
})