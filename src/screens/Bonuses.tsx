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
import WheelIcon from "../assets/svg/WheelIcon";
import LinearGradient from "react-native-linear-gradient";
import Wheel from "../components/Wheel";
import Button from "../components/Button";

const Bonuses = () => {
  const [spinsLeft, decreaseSpins] = useState(1);
  const [current, setCurrent] = useState("REWARD WHEEL");
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.boosticon}>
          <WheelIcon height={20} />
        </View>
        <Text style={styles.titletext}>DAILY REWARDS</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            setCurrent("BONUS");
          }}
          containerStyles={{
            width: calculateResponsiveWidth(125),
            marginRight: calculateResponsiveWidth(10),
          }}
          text="BONUS"
          active={current === "BONUS"}
        ></Button>
        <Button
          onPress={() => {
            setCurrent("REWARD WHEEL");
          }}
          containerStyles={{ width: calculateResponsiveWidth(125) }}
          text="REWARD WHEEL"
          active={current === "REWARD WHEEL"}
        ></Button>
      </View>

      {current === "BONUS" ? (
        <View />
      ) : (
        <>
          <Text style={styles.text}>SPINS LEFT: {spinsLeft} </Text>

          <Wheel d={calculateResponsiveHeight(319)} />

          <Button
            onPress={() => {
              decreaseSpins(spinsLeft - 1);
            }}
            disabled={spinsLeft <= 0}
            text={spinsLeft <= 0 ? "NO SPINS LEFT" : "MAKE A SPIN"}
            containerStyles={{
              width: calculateResponsiveWidth(125),
              marginTop: calculateResponsiveHeight(30),
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(12),
    marginBottom: calculateResponsiveHeight(15),
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: calculateResponsiveHeight(20),
  },
  container: {
    flex: 1,
    backgroundColor: "#485378",
    color: "black",
    paddingBottom: 0,
    paddingTop: calculateResponsiveHeight(30),
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: calculateResponsiveHeight(21),
    marginBottom: calculateResponsiveHeight(27),
  },
  titletext: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(18),
    marginLeft: calculateResponsiveWidth(10),
  },
  boosticon: {
    alignItems: "center",
    marginTop: calculateResponsiveHeight(3),
  },
  boostbutton: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#4ac1f9",
    width: 125,
    height: 39,
    borderRadius: 7,
    marginRight: 15,
  },

  upgradetext: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  boostscontainer: {
    alignItems: "center",
    marginTop: 27,
  },

  boostsbox: {
    width: 335,
    height: 69,
    borderRadius: 10,
    backgroundColor: "#65729a",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boostdesc: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    color: "#fff",
  },
  boostsinfo: {
    flexDirection: "column",
    marginLeft: 15,
  },
  boostprice: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pricetext: {
    fontFamily: "Montserrat",
    fontSize: 10,
    color: "#fff",
    marginRight: 5,
  },
  price: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    color: "#fff",
    marginLeft: 5,
  },
  discounttext: {
    fontFamily: "Montserrat-Bold",
    fontSize: 10,
    color: "#fff",
    letterSpacing: -0.2,
  },
  discountbox: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 69,
    height: 16,
    backgroundColor: "#48c665",
    borderRadius: 7,
    marginLeft: 5,
  },
});
export default Bonuses;
