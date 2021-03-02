import React, { useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AdMobInterstitial} from 'expo-ads-admob';

export default function Interstitial () {
  const handlePress = useCallback(() => {
    (async function showAd() {
      try {
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/4411468910')
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
      } catch (error) {
        console.debug("Could not show ad", error);
      }
    })();
  }, []);


  return (
    <TouchableOpacity onPress={handlePress}>
      <Text >もう一度ルーレットを回す【インタースティシャル】</Text>
    </TouchableOpacity>
  );
};