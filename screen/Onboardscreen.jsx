import { StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector , useDispatch } from 'react-redux'
import  setOnboardingStatus from '../actions/Onboardaction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from 'react-native-onboarding-swiper'

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
    navigation.replace("login")
  }
  return (
   <SafeAreaView>
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("login")}
      // onDone={()=> handleCompleteOnboarding()}
      onDone={ handleCompleteOnboarding}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../images/manwithcard.jpg')}  style={styles.image}/>,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../images/girltravel.jpg')} style={styles.image} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../images/girlsmile.jpg')}  style={styles.image}/>,
          title: 'Become The Star',
          subtitle: "Let The Spot Light Capture You",
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../images/mansmile.jpg')}  style={styles.image}/>,
          title: 'Become The Star',
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
   </SafeAreaView>
  )
}

export default Onboardscreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius:50,
    overflow:hidden,
    // resizeMode: 'cover',  // Ensure the image covers the entire circle
  },
})