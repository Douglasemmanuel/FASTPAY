import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native'
const Amountscreen = () => {
  return (
    <SafeAreaView>
        <View>
      <Text>Amountscreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default Amountscreen

const styles = StyleSheet.create({})