import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AccountBalance from '../components/AccountBalance'
import AccountDetails from '../components/AccountDetails'
import Historyscreen from './Historyscreen'
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