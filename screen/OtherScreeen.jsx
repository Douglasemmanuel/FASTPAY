import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet"
const OtherScreeen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  return (
    <SafeAreaView>
        <View>
      <Text>OtherScreeen</Text>
    </View>
    </SafeAreaView>
  )
}

export default OtherScreeen

const styles = StyleSheet.create({})