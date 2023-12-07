import { StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector , useDispatch } from 'react-redux'
import  setOnboardingStatus from '../actions/Onboardaction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from 'react-native-onboarding-swiper'
import { useLayoutEffect } from 'react'

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}
const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);
const Onboardscreen = ({navigation}) => {
  const dispatch = useDispatch();
  const onboard = useSelector((state)=> state.onboard)
  const handleCompleteOnboarding = () => {
    // Save onboarding status in AsyncStorage
    // This ensures that the onboarding screen is not shown again
    AsyncStorage.setItem('isOnboarded', 'true');

    // Dispatch action to update onboarding status in Redux state
    dispatch(setOnboardingStatus(true));
    navigation.replace("signup2")
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
  return (

   <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("signup")}
      
      // onDone={()=> handleCompleteOnboarding()}
      onDone={ handleCompleteOnboarding}
      pages={[
        
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../images/manwithcard.jpg')}  style={{ marginLeft:50}}/>,
          title: 'Fast Transactions',
          // subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../images/girltravel.jpg')}   style={{ marginLeft:200}} />,
          
          title: 'Connect to the World',
          // subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../images/mansmile.jpg')}   resizeMode="contain"  style={{width:1000 , marginLeft:200}} />,
          title: 'Sign up Now',
          // subtitle: "Let The Spot Light Capture You",
        },
       
      ]}
    />
  
  )
}

export default Onboardscreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius:50,
    // overflow:hidden,
    // resizeMode: 'cover',  // Ensure the image covers the entire circle
  },
})