import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from "react-native";
import HomeIcon from "../../assets/svg/navigation/HomeIcon";
import SettingsIcon from "../../assets/svg/navigation/SettingsIcon";
import ShopIcon from "../../assets/svg/navigation/ShopIcon";
import RatesIcon from "../../assets/svg/navigation/RatesIcon";
import DiamondIcon from "../../assets/svg/DiamondIcon";
import { calculateResponsiveHeight } from "../../utils/responsive";
import { Overlay } from "react-native-elements";
import Button from "../utilities/Button";
import MainMenu from "./MainMenu";
import { DrawerActions } from "react-navigation-drawer";

interface BottomTabNavigatorI {
  navigation: any;
}

const BottomTabNavigator: React.FunctionComponent<BottomTabNavigatorI> = ({
  navigation,
}) => {
  const [current, setCurrent] = useState<undefined | string>(undefined);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    console.log(navigation.state.routes[navigation.state.index].routeName);
    setCurrent(navigation.state.routes[navigation.state.index].routeName);
  });

  return (
    <View>
      <View style={styles.tabcontainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            //navigation.dispatch(DrawerActions.openDrawer());
            console.log(navigation);
            navigation.openDrawer();
          }}
        >
          <SettingsIcon
            height={calculateResponsiveHeight(18)}
            fill={visible ? "#ff685c" : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setVisible(false);
          }}
        >
          <ShopIcon
            height={calculateResponsiveHeight(18)}
            fill={!visible && current === "" ? "#ff685c" : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            navigation.navigate("Home");
            setVisible(false);
          }}
        >
          <HomeIcon
            height={calculateResponsiveHeight(18)}
            fill={!visible && current === "Home" ? "#ff685c" : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setVisible(false);
          }}
        >
          <RatesIcon
            height={calculateResponsiveHeight(18)}
            fill={!visible && current === "" ? "#ff685c" : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setVisible(false);
          }}
        >
          <DiamondIcon
            height={calculateResponsiveHeight(18)}
            fill={!visible && current === "" ? "#ff685c" : undefined}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabcontainer: {
    height: calculateResponsiveHeight(60),
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 3,
  },
  tab: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    height: calculateResponsiveHeight(596),
    backgroundColor: "#fff",
    opacity: 0.75,
  },
});
export default BottomTabNavigator;
