import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomKeyboard = ({ onPress }) => {
  const handleButtonPress = (value) => {
    onPress(value);
  };

  return (
    <View style={styles.keyboardContainer}>
      <TouchableOpacity onPress={() => handleButtonPress('0')} style={styles.button}>
        <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('1')} style={styles.button}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('2')} style={styles.button}>
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('3')} style={styles.button}>
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('4')} style={styles.button}>
        <Text style={styles.buttonText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('5')} style={styles.button}>
        <Text style={styles.buttonText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('6')} style={styles.button}>
        <Text style={styles.buttonText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('7')} style={styles.button}>
        <Text style={styles.buttonText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('8')} style={styles.button}>
        <Text style={styles.buttonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('9')} style={styles.button}>
        <Text style={styles.buttonText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('-')} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      {/* Add buttons for other digits */}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:300,
    padding:20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius:50,
    margin:20,
    // borderCurve:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    
  },
  buttonText: {
    fontSize: 20,
    fontWeight:'bold',
  },
});

export default CustomKeyboard;
