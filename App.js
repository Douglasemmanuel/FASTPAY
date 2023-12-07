import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
import Navigation from './Navigation/Navigation';
import * as Font from 'expo-font'
import { useEffect } from 'react';
export default function App() {
  // useEffect(() => {
  //   // Load Google Font
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       'your-google-font': {
  //         // uri: 'https://fonts.googleapis.com/css2?family=YourGoogleFont',
  //         uri:'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,600;1,100&family=DM+Sans:wght@700&family=Inter:wght@400;700&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,600&family=Poppins:ital,wght@0,500;0,600;1,300&family=Roboto:wght@300;400;500;700;900&family=Sora:wght@300;400;500;600;700&display=swap'
  //       },
  //     });
  //   };

  //   loadFonts();
  // }, []); // Only run this effect once when the component mounts
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       Roboto: require('native-base/Fonts/Roboto.ttf'),
  //       'Roboto-Bold': require('native-base/Fonts/Roboto_bold.ttf'),
  //     });
  //   };

  //   loadFonts();
  // }, []);
  return (
    <Provider store={store}>
      <Navigation/>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app fans!</Text>
      <StatusBar style="auto" />
    </View> */}
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
