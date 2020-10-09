import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import HomeIcon from "../../assets/svg/navigation/HomeIcon";
import SettingsIcon from "../../assets/svg/navigation/SettingsIcon";
import ShopIcon from "../../assets/svg/navigation/ShopIcon";
import RatesIcon from "../../assets/svg/navigation/RatesIcon";
import DiamondIcon from "../../assets/svg/DiamondIcon";

interface BottomTabNavigatorI {
  navigation: any;
}

const BottomTabNavigator: React.FunctionComponent<BottomTabNavigatorI> = ({
  navigation,
}) => {
  //console.log(navigation.state.routeName);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <SettingsIcon height={18} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <ShopIcon height={18} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <HomeIcon height={18} fill={"#ff685c"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <RatesIcon height={18} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          navigation.navigate("Boosts");
        }}
      >
        <DiamondIcon height={18} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
  tab: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BottomTabNavigator;
