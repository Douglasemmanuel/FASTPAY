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
      {/* <Text>Profilescreen</Text> */}
      <Head/>
      <Personal/>
      <Security/>
      <Logout/>
    </View>
    </SafeAreaView>
  )
}
const Head =()=>{
  return(
    <View>

    </View>
  )
}
const Personal=()=>{
  return (
    <View>
      <Text> hiiiii</Text>
    </View>
  )
}
const Security=()=>{
  return (
    <View>

    </View>
  )
}
const Logout =()=>{
  return (
    <View>
        <View style={styles.curvedView}>
          
        </View>
    </View>
  )
}
export default Profilescreen

const styles = StyleSheet.create({
  curvedView: {
    // marginTop:10,
    // marginBottom:30,
    width: 380,
    height: 100,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
})