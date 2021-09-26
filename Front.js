import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Front() {
  return (
    <View style={styles.container}>
        <Image style={styles.front1} source={require('./assets/front1.png')} />
        <Image style={styles.front2} source={require('./assets/extra_front.png')} />
        <Text style={styles.front_text}>Climb higher with JobSeek app</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94483B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  front1: {
      top:320,
      height: 657,
      width: 369,
  },
  front2: {
      top:-270,
      height: 657,
      width: 369,
  },

  front_text: {
      fontSize: 33,
      maxWidth:270,
      textAlign: 'center',
      top:-500,
      color: '#fff',
  }



});