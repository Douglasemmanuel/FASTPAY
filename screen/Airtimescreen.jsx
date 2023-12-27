import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Airtimescreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
        <View>
         <Text>Airtimescreen</Text>
        </View>
    </SafeAreaView>
  )
}

export default Airtimescreen

const styles = StyleSheet.create({})