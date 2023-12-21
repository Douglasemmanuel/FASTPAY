import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
const Cardscreen = () => {
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
        <View></View>
      {/* Card Background */}
      <View style={styles.card}>
        {/* Card Logo */}
        <Image
          source={require('../images/mansmile.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Card Number */}
        <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>

        {/* Cardholder Name and Expiry */}
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardHolderName}>John Doe</Text>
          <Text style={styles.expiry}>Exp: 12/24</Text>
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
    width: 300,
    height: 180,
    borderRadius: 15,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 40,
    marginBottom: 10,
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