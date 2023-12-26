import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
const Profilescreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
  return (
    <SafeAreaView>
    <View>
      <Text>Profilescreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default Profilescreen

const styles = StyleSheet.create({})