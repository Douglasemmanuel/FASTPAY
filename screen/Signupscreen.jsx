import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import utilis from '../core/utils'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import Input from '../components/Input'
import Button from "../components/Button"
import Tittle from "../components/Tittle"
import { Keyboard } from 'react-native'
import { useState } from 'react'
const Signupscreen = () => {
  const navigation = useNavigation()
    //to hide the header on the navigation tab
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
    },[])
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView behaviour='height' style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text>Signupscreen</Text>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Signupscreen

const styles = StyleSheet.create({})