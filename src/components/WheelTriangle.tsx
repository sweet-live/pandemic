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

interface triangleProps {
  d: number;
  rotate: string;
  color: string;
  text: string;
}

const WheelTriangle: React.FunctionComponent<triangleProps> = ({
  d,
  rotate,
  color,
  text,
}) => {
  return (
    <View
      style={[
        styles.mainwheel,
        { width: d, height: d, transform: [{ rotate: rotate }] },
      ]}
    >
      <View
        style={{
          width: 0,
          height: 0,
          position: "relative",
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.trianglecontainer}>
          <Text style={styles.text}>{text}</Text>
          <View style={[styles.triangle, { borderRightColor: color }]}></View>
        </View>
      </View>
    </View>
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
    borderTopColor: "transparent",
  },
});
export default WheelTriangle;
