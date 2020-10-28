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
import Button from "../components/utilities/Button";
import CrossIcon from "../assets/svg/CrossIcon";
import BonusBox from "../components/BonusBox";
import BoostsIcon from "../assets/svg/stats/BoostsIcon";

interface BonusesI {
  type: string;
  amount: number;
  taken: boolean;
}

const Bonuses = ({ navigation }) => {
  const data: BonusesI[] = [
    {
      type: "Cash reward",
      amount: 50000,
      taken: true,
    },

    {
      type: "Vaccine",
      amount: 50,
      taken: false,
    },

    {
      type: "Cash reward",
      amount: 50000,
      taken: false,
    },

    {
      type: "Vaccine",
      amount: 250,
      taken: false,
    },

    {
      type: "Diamonds",
      amount: 10,
      taken: false,
    },

    {
      type: "Cash reward",
      amount: 100000,
      taken: false,
    },
  ];

  const [spinsLeft, decreaseSpins] = useState(1);
  const [current, setCurrent] = useState("REWARD WHEEL");
  return (
    <View style={styles.container}>
      <View
        style={{
          top: calculateResponsiveHeight(20),
          right: calculateResponsiveWidth(20),
          position: "absolute",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <CrossIcon width={calculateResponsiveWidth(20)}></CrossIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <View style={styles.boosticon}>
          <WheelIcon height={calculateResponsiveHeight(20)} />
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
        <>
          <FlatList
            data={data}
            numColumns={3}
            scrollEnabled={false}
            style={{
              alignSelf: "stretch",
            }}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: calculateResponsiveWidth(10),
            }}
            keyExtractor={(item, index) => `bonus-item-${index}`}
            renderItem={({ item, index }) => {
              return (
                <BonusBox
                  index={index}
                  type={item.type}
                  amount={item.amount}
                  taken={item.taken}
                ></BonusBox>
              );
            }}
          />
          <View style={styles.megaReward}>
            <View style={styles.megaTop}>
              <Text style={styles.megaTitleText}>Day 7 MEGA REWARD</Text>
            </View>
            <View style={styles.rewardsContainer}>
              <View style={styles.box}>
                <DiamondIcon
                  width={calculateResponsiveWidth(40)}
                  fill="#fff"
                ></DiamondIcon>
                <Text style={styles.topLine}>
                  Exclusive{"\n"}
                  <Text style={styles.botLine}>Avatar</Text>
                </Text>
              </View>
              <View style={styles.box}>
                <BoostsIcon width={calculateResponsiveWidth(40)}></BoostsIcon>
                <Text style={styles.topLine}>
                  x2 earnings{"\n"}
                  <Text style={styles.botLine}>for 12 hours</Text>
                </Text>
              </View>
              <View style={styles.box}>
                <DiamondIcon
                  width={calculateResponsiveWidth(40)}
                  fill="#fff"
                ></DiamondIcon>
                <Text style={styles.topLine}>
                  20{"\n"}
                  <Text style={styles.botLine}>Diamonds</Text>
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>SPINS LEFT: {spinsLeft} </Text>

          <Wheel d={calculateResponsiveHeight(319)} />

          <Button
            onPress={() => {
              decreaseSpins(spinsLeft - 1);
            }}
            disabled={spinsLeft <= 0}
            text={spinsLeft <= 0 ? "BUY SPINS" : "MAKE A SPIN"}
            containerStyles={{
              width: calculateResponsiveWidth(125),
              marginTop: calculateResponsiveHeight(26),
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
    paddingTop: calculateResponsiveHeight(21),
    paddingHorizontal: calculateResponsiveWidth(12),
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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

  megaReward: {
    borderWidth: 3,
    borderTopWidth: 0,
    overflow: "hidden",
    borderRadius: calculateResponsiveHeight(7),
    borderColor: "#ff685c",
    alignSelf: "stretch",
    height: calculateResponsiveHeight(141),
    marginBottom: calculateResponsiveHeight(20),
    marginTop: calculateResponsiveHeight(10),
  },
  megaTop: {
    backgroundColor: "#ff685c",
    height: calculateResponsiveHeight(29),
    alignItems: "center",
    justifyContent: "center",
  },
  rewardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: calculateResponsiveHeight(25.5),
    paddingTop: calculateResponsiveHeight(17),
  },
  topLine: {
    marginTop: calculateResponsiveHeight(12),
    fontFamily: "Montserrat-Bold",
    fontSize: calculateResponsiveHeight(12),
    color: "#4ac1f9",
    textAlign: "center",
  },
  botLine: {
    color: "#fff",
  },
  box: {
    alignItems: "center",
  },
  megaTitleText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize: calculateResponsiveHeight(12),
  },
});
export default Bonuses;
