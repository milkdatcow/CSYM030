import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../style";

const Welcome = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <View style={styles.container}>
        <Text>Welsome</Text>
    </View>
  )
}

export default Welcome