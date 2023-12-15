import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from '../screen/Homescreen'
import Transferscreen from '../screen/Transferscreen'
import Historyscreen from '../screen/Historyscreen'
import Profilescreen from '../screen/Profilescreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Bottomnavigation = () => {
  return (
   <Tab.Navigator
   initialRouteName="home"
    activeColor="#FF4433"
    inactiveColor="black"
    // activeTintColor
  
    barStyle={{ backgroundColor: 'white' }}
    tabBarOptions={{
       activeTintColor:'blue',
       inactiveTintColor:'gray',
    }}
    // onTabLongPress={{backgroundColor:'white'}}
    ScreenOptions={{ headerShown: false }}
   >
     <Tab.Screen 
      name="home" 
      component={Homescreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        // tabBarIcon: ({ color }) => (
        //   // <MaterialCommunityIcons name="home" color={color} size={26} />
        //   <Icon name="home" color={color} size={26} />
        // ),
      }}
      />
       <Tab.Screen 
      name="transfer" 
      // options={{ headerShown: false }}
      component={Transferscreen}
      options={{
        tabBarLabel: 'Transfer',
        tabBarIcon: ({ color }) => (
          // <MaterialCommunityIcons name="account" color={color} size={26} />
          <Icon name="home" color={color} size={26} />
        ),
        tabBarColor:"#FF4433",
        headerShown: false
      }}
      />
       <Tab.Screen 
      name="history" 
      component={Historyscreen}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color }) => (
          // <MaterialCommunityIcons name="help-box" color={color} size={26} />
           <Icon name="help" color={color} size={26} />
        ),
        tabBarColor:"#FF4433"
      }}
      />
       <Tab.Screen 
      name="profile" 
      // options={{ headerShown: false }}
      component={Profilescreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color , }) => (
          // <MaterialCommunityIcons name="account" color={color} size={26} />
          <Icon name="person" color={color} size={26} />
        ),
        tabBarColor:"#FF4433"
        // headerShown: false
      }}
      />
   </Tab.Navigator>
  )
}

export default Bottomnavigation

const styles = StyleSheet.create({})