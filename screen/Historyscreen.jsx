import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const Historyscreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
  },[])
  return (
  <SafeAreaView>

    <View>
      <Text>Recent Activities</Text>
      <View style={{flexDirection:'row'}}>
        <Text></Text>
        <Text></Text>
        <View style={{borderRadius:50}}>
        <Text>{'\u20A6'}0.00</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Historyscreen

const styles = StyleSheet.create({})