import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { AdMobBanner } from 'expo-ads-admob';

export default function App() {


  return (
    <View style={styles.container}>

      <AdMobBanner 
        adUnitID="ca-app-pub-3940256099942544/2934735716"
        style={styles.banner}
        />
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
    bottom: 50,
  }
});
