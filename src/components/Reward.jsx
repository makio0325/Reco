import React, { useCallback, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { AdMobRewarded } from "expo-ads-admob";

export default function Reward () {
  const handlePress = useCallback(() => {
    (async function showAd() {
      try {
        await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/1712485313')
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
      } catch (error) {
        console.debug("Could not show ad", error);
      }
    })();
  }, []);

  useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {
      console.debug("Got reward");
    });

    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => {
      console.debug("Ad failed to load");
    });

    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text >もう一度ルーレットを回す【広告表示】</Text>
    </TouchableOpacity>
  );
};


//'ca-app-pub-3940256099942544/1712485313'

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