import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const Homescreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
  return (
   <SafeAreaView>
     <View>
      <Text>Homescreen</Text>
    </View>
   </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})