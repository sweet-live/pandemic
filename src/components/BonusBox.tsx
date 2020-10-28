import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import EmployeeIcon from "../assets/svg/EmployeeIcon";
import PaperClipIcon from "../assets/svg/PaperClipIcon";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../utils/responsive";
import Button from "./utilities/Button";
import LoadingBar from "./utilities/LoadingBar";
import {
  getResultNumber,
  getResultText,
  secondsToString,
  formatPrice,
} from "../utils/stringFormatting";
import SyringeFull from "../assets/svg/SyringeFullIcon";
import DiamondIcon from "../assets/svg/DiamondIcon";
import DollarIcon from "../assets/svg/DollarIcon";

interface BonusBoxI {
  index: number;
  type: string;
  amount: number;
  taken: boolean;
}

const BonusBox: React.FunctionComponent<BonusBoxI> = ({
  index,
  type,
  amount,
  taken,
}) => {
  return (
    <View
      style={[
        styles.box,
        taken ? { borderColor: "#48c665" } : { borderColor: "#4ac1f9" },
      ]}
    >
      <View
        style={[
          styles.titlepart,
          taken
            ? { backgroundColor: "#48c665" }
            : { backgroundColor: "#4ac1f9" },
        ]}
      >
        <Text style={styles.titletext}>Day: {index + 1}</Text>
      </View>
      <View style={styles.contentbox}>
        {type === "Cash reward" && (
          <DollarIcon width={calculateResponsiveWidth(40)}></DollarIcon>
        )}
        {type === "Vaccine" && (
          <SyringeFull width={calculateResponsiveWidth(40)}></SyringeFull>
        )}
        {type === "Diamonds" && (
          <DiamondIcon
            width={calculateResponsiveWidth(40)}
            fill="#fff"
          ></DiamondIcon>
        )}
        {taken ? (
          <Text style={styles.takentext}> Already{"\n"} Taken</Text>
        ) : (
          <Text style={styles.amountText}>
            {type === "Cash reward" ? formatPrice(amount) : amount}
            {"\n"}
            <Text style={styles.type}>{type}</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: calculateResponsiveWidth(110),
    height: calculateResponsiveHeight(141),
    borderRadius: calculateResponsiveHeight(7),
    overflow: "hidden",
    borderWidth: 3,
    borderTopWidth: 0,
  },
  titlepart: {
    width: calculateResponsiveWidth(110),
    height: calculateResponsiveHeight(29),
    alignItems: "center",
    justifyContent: "center",
  },
  titletext: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(12),
  },
  contentbox: {
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: calculateResponsiveHeight(16),
    justifyContent: "space-between",
  },
  takentext: {
    fontFamily: "Montserrat-Bold",
    color: "#48c665",
    fontSize: calculateResponsiveHeight(12),
    textAlign: "center",
    marginTop: calculateResponsiveHeight(12),
  },
  amountText: {
    color: "#4ac1f9",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    fontSize: calculateResponsiveHeight(12),
    marginTop: calculateResponsiveHeight(12),
  },
  type: {
    color: "#fff",
    textAlign: "center",
  },
});

export default BonusBox;
