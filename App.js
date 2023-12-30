import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
import Navigation from './Navigation/Navigation';
// import * as Font from 'expo-font'
// import { useEffect } from 'react';
export default function App() {
  
  return (
    <Provider store={store}>
      <Navigation/>
   
    </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
