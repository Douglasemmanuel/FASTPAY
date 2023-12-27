import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { useLayoutEffect } from 'react'
const BankTransferscreen = () => {
 
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
function move(){
  navigation.goBack()
}
  return (
  <SafeAreaView>
      <View>
      <Text>BankTransferscreen</Text>
    </View>
  </SafeAreaView>
  )
}

export default BankTransferscreen

const styles = StyleSheet.create({})