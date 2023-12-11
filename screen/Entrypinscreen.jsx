import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Entrypinscreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
    <View>
      <Text>Entrypinscreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default Entrypinscreen

const styles = StyleSheet.create({})