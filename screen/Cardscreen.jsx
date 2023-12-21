import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
const Cardscreen = () => {
  const [isShown , setShow] = useState(true)
  const toggleComponent =()=>{
    setShow(!isShown)
  }
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  return (
    <SafeAreaView>
      <Text>Cardscreen</Text>
      {isShown ? 
       <TouchableOpacity style={styles.cardContainer} onPress={toggleComponent}>
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
     </TouchableOpacity>
     
     :
    <TouchableOpacity style={styles.cardContainerBack} onPress={toggleComponent}>
      {/* Card Back */}
      <View style={styles.cardBack}>
        {/* Magnetic Stripe */}
        <View style={styles.magneticStripe}></View>

        {/* CVV */}
        <View style={styles.cvvContainer}>
          <Text style={styles.cvvLabel}>CVV</Text>
          <Text style={styles.cvvNumber}>123</Text>
        </View>
      </View>
    </TouchableOpacity>
    }
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
    backgroundColor: 'black', // Card background color
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
  cardContainerBack: {
    alignItems: 'center',
    marginTop: 50,
  },
  cardBack: {
    backgroundColor: 'white', // Card back background color
    width: 380,
    height: 200,
    borderRadius: 15,
    padding: 20,
  },
  magneticStripe: {
    backgroundColor: 'black', // Magnetic stripe color
    height: 20,
    marginBottom: 20,
  },
  cvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cvvLabel: {
    color: 'black',
    fontSize: 16,
  },
  cvvNumber: {
    color: 'black',
    fontSize: 16,
  },
})