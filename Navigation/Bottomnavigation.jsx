import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from '../screen/Homescreen'
import Transferscreen from '../screen/Transferscreen'
import Historyscreen from '../screen/Historyscreen'
import Profilescreen from '../screen/Profilescreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
const Bottomnavigation = () => {
  return (
   <Tab.Navigator
   initialRouteName="home"
    activeColor="#FF4433"
    inactiveColor="black"
    barStyle={{ backgroundColor: 'white' }}
    // onTabLongPress={{backgroundColor:'white'}}
    ScreenOptions={{ headerShown: false }}
   >
     <Tab.Screen 
      name="home" 
      component={Homescreen}
      options={{
        tabBarLabel: 'home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
       <Tab.Screen 
      name="transfer" 
      // options={{ headerShown: false }}
      component={Transferscreen}
      options={{
        tabBarLabel: 'Transfer',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
        headerShown: false
      }}
      />
       <Tab.Screen 
      name="history" 
      component={Historyscreen}
      options={{
        tabBarLabel: 'Help',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="help-box" color={color} size={26} />
        ),
      }}
      />
       <Tab.Screen 
      name="profile" 
      // options={{ headerShown: false }}
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
        headerShown: false
      }}
      />
   </Tab.Navigator>
  )
}

export default Bottomnavigation

const styles = StyleSheet.create({})