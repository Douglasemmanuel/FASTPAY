import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AccountBalance from '../components/AccountBalance'
import AccountDetails from '../components/AccountDetails'
import Historyscreen from './Historyscreen'
import Userinfo from '../components/Userinfo'
import UserAccount from '../components/UserAccount'
import History from '../components/History'
const Homescreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
  return (
   <SafeAreaView>
     <View style={{marginLeft:20}}>
      <Userinfo/>
      <History/>
      {/* <Text>Homescreen</Text> */}
    </View>
   </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})