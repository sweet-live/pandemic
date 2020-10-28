import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { TouchableOpacity } from "react-native";
import EmployeeIconCircle from "../assets/svg/EmployeeIconCircle";
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
import DollarIcon from "../assets/svg/DollarIcon";
import EmployeeIcon from "../assets/svg/EmployeeIcon";

interface EmployeesBoxI {
  name: string;
  role: string;
  specSkill: string;
  levelNow: number;
  levelMax: number;
  speed: string;
  coolDown: string;
  nextLevel?: {
    level: number;
    speed: string;
    coolDown: string;
  };
  price?: number;
}

const EmployeesBox: React.FunctionComponent<EmployeesBoxI> = ({ ...props }) => {
  return (
    <View
      style={{
        width: calculateResponsiveWidth(335),
        height: calculateResponsiveHeight(110),
        backgroundColor: "#65729a",
        borderRadius: calculateResponsiveHeight(7),
        marginBottom: calculateResponsiveHeight(10),
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.top}>
        <View style={styles.iconContainer}>
          <EmployeeIcon width={calculateResponsiveWidth(19)} fill="#fff" />
        </View>
        <View style={{ marginLeft: calculateResponsiveWidth(10) }}>
          <View style={styles.topText}>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#fff",
                fontSize: calculateResponsiveHeight(14),
                marginRight: calculateResponsiveWidth(5),
              }}
            >
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat",
                color: "#fff",
                fontSize: calculateResponsiveHeight(10),
              }}
            >
              {props.role}
            </Text>
          </View>
          <View style={styles.topText}>
            <Text
              style={{
                fontFamily: "Montserrat",
                color: "#fff",
                fontSize: calculateResponsiveHeight(10),
                marginRight: calculateResponsiveWidth(5),
              }}
            >
              Special Skill:
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#fff",
                fontSize: calculateResponsiveHeight(10),
              }}
            >
              {props.specSkill}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bot}>
        <View style={{ marginLeft: calculateResponsiveWidth(15) }}>
          <Text
            style={{
              fontFamily: "Montserrat",
              color: "#fff",
              fontSize: calculateResponsiveHeight(10),
            }}
          >
            Level:{" "}
            <Text style={{ fontFamily: "Montserrat-Bold" }}>
              {`${props.levelNow} / ${props.levelMax}lvl `}
              <Text style={{ color: "#4ac1f9" }}>
                {` > ${props.nextLevel?.level}lvl`}
              </Text>
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat",
              color: "#fff",
              fontSize: calculateResponsiveHeight(10),
            }}
          >
            Extra speed:{" "}
            <Text style={{ fontFamily: "Montserrat-Bold" }}>
              {`${props.speed}`}
              <Text style={{ color: "#4ac1f9" }}>
                {` > ${props.nextLevel?.speed}lvl`}
              </Text>
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat",
              color: "#fff",
              fontSize: calculateResponsiveHeight(10),
            }}
          >
            Skill cooldown:{" "}
            <Text style={{ fontFamily: "Montserrat-Bold" }}>
              {`${props.coolDown}`}
              <Text style={{ color: "#4ac1f9" }}>
                {` > ${props.nextLevel?.coolDown}`}
              </Text>
            </Text>
          </Text>
        </View>
        <Button
          onPress={() => {}}
          text="UPGRADE"
          containerStyles={{
            width: calculateResponsiveWidth(125),
            height: calculateResponsiveHeight(39),
            marginRight: calculateResponsiveWidth(10),
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginLeft: calculateResponsiveWidth(15),
    marginTop: calculateResponsiveHeight(15),
  },
  topText: { flexDirection: "row", alignItems: "baseline" },
  bot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  iconContainer: {
    width: calculateResponsiveWidth(39),
    height: calculateResponsiveWidth(39),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4ac1f9",
    borderRadius: calculateResponsiveHeight(7),
  },
});
export default EmployeesBox;
