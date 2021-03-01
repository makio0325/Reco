
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Reward from './src/components/Reward';
import Banner from './src/components/Banner';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Banner />
        <Reward />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  banner: {
    alignItems: 'center',
    position:'absolute',
    bottom:50,
  }
});
