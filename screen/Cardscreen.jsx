import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
const Cardscreen = () => {
  const [isShown , notShown] = useState(false)
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  return (
    <SafeAreaView>
      <Text>Cardscreen</Text>
      <View style={styles.cardContainer}>
      {/* Card Background */}
      <View style={styles.card}>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'white', fontWeight:'bold' , fontSize:16 , flex:7}}>FastPay</Text>
          <Text style={{color:'white', fontWeight:'bold' , fontSize:16 , flex:1}}>VISA</Text>
        </View>
        {/* Card Logo */}
        <Image
          source={require('../images/chip1.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Card Number */}
        <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>

        {/* Cardholder Name and Expiry */}
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardHolderName}>Doggie</Text>
          <Text style={styles.expiry}>Exp: 12/28</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Cardscreen

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  card: {
    backgroundColor: 'blue', // Card background color
    width: 380,
    height: 200,
    borderRadius: 15,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 40,
    marginBottom: 10,
    marginTop:10,
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolderName: {
    color: 'white',
    fontSize: 16,
  },
  expiry: {
    color: 'white',
    fontSize: 16,
  },
})