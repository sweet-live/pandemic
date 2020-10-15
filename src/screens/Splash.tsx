import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import BloodIcon from "../assets/svg/BloodIcon";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../utils/responsive";
import LoadingBar from "../components/utilities/LoadingBar";
import { useState, useEffect } from "react";

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <BloodIcon height={calculateResponsiveHeight(74)} />
        </View>
        <Text style={styles.mainTitle}>Pandemic Defender</Text>
      </View>
      <View style={styles.progressContainer}>
        <LoadingBar width={275} current={23} total={100} />
        <Text
          style={[styles.text, { fontSize: calculateResponsiveHeight(12) }]}
        >
          Loading... (23%)
        </Text>
      </View>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center",
    marginTop: calculateResponsiveHeight(223),
  },
  container: {
    flex: 1,
    backgroundColor: "#485378",
    padding: 5,
    paddingBottom: 0,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: calculateResponsiveHeight(100),
  },
  logo: {
    width: 175,
    height: 175,
    borderRadius: 51,
    backgroundColor: "#ff685c",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    marginTop: calculateResponsiveHeight(15),
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(20),
  },
  text: {
    marginTop: calculateResponsiveHeight(10),
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(12),
  },
});
