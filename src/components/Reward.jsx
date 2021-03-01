import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { AdMobRewarded } from "expo-ads-admob";

export const Reward = () => {
  const handlePress = React.useCallback(() => {
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

  React.useEffect(() => {
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
      <Text>Click here</Text>
    </TouchableOpacity>
  );
};

export default Reward;

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