import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import DiamondIcon from "../assets/svg/DiamondIcon";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../utils/responsive";
import BookIcon from "../assets/svg/stats/BookIcon";
import LinearGradient from "react-native-linear-gradient";
import { hide } from "expo-splash-screen";
import WheelTriangle from "./WheelTriangle";
import { render } from "react-dom";
import Animated, {
  Value,
  Clock,
  useCode,
  set,
  Easing,
  cond,
  and,
  not,
  clockRunning,
  startClock,
  stopClock,
  block,
  eq,
  timing,
  debug,
} from "react-native-reanimated";
import {} from "react-native-redash";

const Wheel = ({ d }) => {
  return (
    <Animated.View
      style={[
        styles.mainwheel,
        {
          width: d,
          height: d,
          borderRadius: d / 2,
        },
      ]}
    >
      <WheelTriangle d={d} text="YES" rotate="0deg" color="#48527b" />
      <WheelTriangle d={d} text="YES" rotate="45deg" color="#65729a" />
      <WheelTriangle d={d} text="YES" rotate="90deg" color="#48527b" />
      <WheelTriangle d={d} text="YES" rotate="135deg" color="#4ac1f9" />
      <WheelTriangle d={d} text="YES" rotate="180deg" color="#48527b" />
      <WheelTriangle d={d} text="YES" rotate="225deg" color="#65729a" />
      <WheelTriangle d={d} text="YES" rotate="270deg" color="#48527b" />
      <WheelTriangle d={d} text="YES" rotate="315deg" color="#4ac1f9" />
      <WheelTriangle d={d} text="YES" rotate="360deg" color="#48527b" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  trianglecontainer: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mainwheel: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  mainwheel2: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    zIndex: 1,
    elevation: 1,
    color: "#fff",
    fontSize: 10,
    fontFamily: "Montserrat-Bold",
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 200,
    borderRightWidth: 200,
    borderRightColor: "red",
    borderTopColor: "transparent",
  },
});

export default Wheel;
