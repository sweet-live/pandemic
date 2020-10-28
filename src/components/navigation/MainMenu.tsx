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
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../../utils/responsive";
import { Overlay } from "react-native-elements";
import Button from "../utilities/Button";
import { NavigationEvents } from "react-navigation";

interface MainMenuI {
  navigation: any;
}

const MainMenu: React.FunctionComponent<MainMenuI> = ({ navigation }) => {
  return (
    <View style={{ width: 200, alignItems: "center" }}>
      <Button
        text="REWARDS"
        onPress={() => {
          navigation.navigate("Bonuses");
        }}
        containerStyles={{
          width: calculateResponsiveWidth(200),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
        }}
      />

      <Button
        text="BOOSTS"
        onPress={() => {
          navigation.navigate("Boosts");
        }}
        containerStyles={{
          width: calculateResponsiveWidth(200),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
        }}
      />

      <Button
        text="QUEST"
        onPress={() => {
          navigation.navigate("Quests");
        }}
        containerStyles={{
          width: calculateResponsiveWidth(200),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
        }}
      />

      <Button
        text="EMPLOYEES"
        onPress={() => {
          navigation.navigate("Employees");
        }}
        containerStyles={{
          width: calculateResponsiveWidth(200),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
        }}
      />

      <Button
        text="FEEDBACK"
        onPress={() => {}}
        containerStyles={{
          width: calculateResponsiveWidth(200),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
        }}
      />

      <Button
        text="OPTIONS"
        onPress={() => {}}
        containerStyles={{
          width: calculateResponsiveWidth(200),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
        }}
      />

      <Button
        text="CLOSE"
        onPress={() => {}}
        containerStyles={{
          width: calculateResponsiveWidth(100),
          height: calculateResponsiveHeight(40),
          marginBottom: calculateResponsiveHeight(15),
          borderRadius: calculateResponsiveHeight(24.5),
          backgroundColor: "#ff685c",
        }}
      />
    </View>
  );
};
export default MainMenu;
