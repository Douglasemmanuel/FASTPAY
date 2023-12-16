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
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faMoneyBillTransfer} from "@fortawesome/free-solid-svg-icons/faMoneyBillTransfer"
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
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
      <AccountBalance/>
      <History/>
      {/* <Text>Homescreen</Text> */}
      <View style={styles.container}>
      {/* Your other components go here */}

      {/* Bottom Right Button */}
      <TouchableOpacity style={styles.button}>
      <View><FontAwesomeIcon icon={ faPaperPlane} color='white'  size={32}/></View>
     
        {/* <View><FontAwesomeIcon icon={faMoneyBillTransfer} color='white'  size={25}/></View> */}
        {/* <Text style={styles.buttonText}>Button</Text> */}
      </TouchableOpacity>
    </View>
    </View>
   </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 36,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
  },
})