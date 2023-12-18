import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const News = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>News</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({})