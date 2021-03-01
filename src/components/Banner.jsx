import React from 'react';
import { View, StyleSheet} from "react-native";
import { AdMobBanner } from 'expo-ads-admob';

export default function Banner () {

  function bannerError() {
    console.log("Ad Fail error")
  }

  return(
    <View>
      <AdMobBanner 
          adSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
          style={styles.banner}
          onDidFailToReceiveAdWithError={bannerError} 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  banner: {
    alignItems: 'center',
  
    bottom:50,
  }
});