import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app fans!</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
