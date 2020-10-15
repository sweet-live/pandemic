import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
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

interface BuildingContainerI {
  title: string;
  level: number;
  result1Text: string;
  result1: string;
  result2Text: string;
  result2: string;
  timeNow: number;
  timeTotal: number;
  employees: 0 | 1 | 2 | 3;
  upgradePrice: number;
  picture: any;
}

const BuildingContainer: React.FunctionComponent<BuildingContainerI> = ({
  title,
  level,
  result1Text,
  result1,
  result2Text,
  result2,
  timeNow,
  timeTotal,
  employees,
  upgradePrice,
  picture,
}) => {
  return (
    <View style={styles.actionBox}>
      <View style={styles.actionTop}>
        <View style={styles.actionImage}>
          <TouchableOpacity>
            <FastImage
              source={picture}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PaperClipIcon height={calculateResponsiveHeight(18)} />
              <Text style={styles.upgradePushText}>Tap to start</Text>
            </FastImage>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          {/* <Text style={styles.itemTitle}>
            {title}
            <Text
              style={{
                fontFamily: "Montserrat",
                fontSize: calculateResponsiveHeight(8),
                marginLeft: 5,
              }}
            >
              Level:{" "}
              <Text
                style={[styles.textInfo, { fontFamily: "Montserrat-Bold" }]}
              >
                {level}
              </Text>
            </Text>
          </Text> */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#fff",
                fontSize: calculateResponsiveHeight(14),
              }}
            >
              {title}
            </Text>
            <View
              style={{
                marginLeft: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat",
                  color: "#fff",
                  fontSize: calculateResponsiveHeight(8),
                }}
              >
                Level:{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  color: "#fff",
                  fontSize: calculateResponsiveHeight(8),
                }}
              >
                {level}
              </Text>
            </View>
          </View>
          <Text style={styles.textCategory}>
            {result1Text} <Text style={styles.textInfo}>{result1}</Text>
          </Text>
          <Text style={styles.textCategory}>
            {result2Text} <Text style={styles.textInfo}>{result2}</Text>
          </Text>
          <View style={{ marginTop: calculateResponsiveHeight(7) }}>
            <LoadingBar
              width={187}
              height={4}
              current={timeNow}
              total={timeTotal}
              backgroundColor="#48527b"
            />
          </View>
          <View style={styles.underProgressBar}>
            <Text
              style={[
                styles.textCategory,
                { fontSize: calculateResponsiveHeight(8) },
              ]}
            >
              0%
            </Text>
            <Text
              style={[
                styles.textInfo,
                { fontSize: calculateResponsiveHeight(8) },
              ]}
            >
              {timeNow}
            </Text>
            <Text
              style={[
                styles.textCategory,
                { fontSize: calculateResponsiveHeight(8) },
              ]}
            >
              100%
            </Text>
          </View>
        </View>
      </View>
      <View />
      <View style={styles.actionBottom}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: calculateResponsiveHeight(7),
                fontFamily: "Montserrat-Bold",
                color: "#fff",
              }}
            >
              UPGRADE PRICE:
            </Text>

            <Text
              style={{
                marginLeft: calculateResponsiveWidth(5),
                fontSize: calculateResponsiveHeight(14),
                fontFamily: "Montserrat-Bold",
                color: "#fff",
              }}
            >
              {upgradePrice}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Text
              style={{
                fontSize: calculateResponsiveHeight(7),
                fontFamily: "Montserrat-Bold",
                color: "#fff",
                marginRight: calculateResponsiveWidth(5),
              }}
            >
              EMPLOYEES:
            </Text>
            <EmployeeIcon
              d={calculateResponsiveWidth(15)}
              fill={employees >= 1 ? "#48c665" : "#fff"}
              marginRight={calculateResponsiveWidth(5)}
            />
            <EmployeeIcon
              d={calculateResponsiveWidth(15)}
              fill={employees >= 2 ? "#48c665" : "#fff"}
              marginRight={calculateResponsiveWidth(5)}
            />
            <EmployeeIcon
              d={calculateResponsiveWidth(15)}
              fill={employees >= 3 ? "#48c665" : "#fff"}
            />
          </View>
        </View>

        <Button
          onPress={() => {}}
          text="UPGRADE"
          containerStyles={{
            width: calculateResponsiveWidth(125),
            height: calculateResponsiveHeight(39),
          }}
        ></Button>
      </View>
    </View>
  );
};

export default BuildingContainer;

const styles = StyleSheet.create({
  underProgressBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCategory: {
    fontFamily: "Montserrat",
    fontSize: calculateResponsiveHeight(10),
    color: "#fff",
  },
  textInfo: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  infoContainer: {
    justifyContent: "center",
    marginLeft: calculateResponsiveWidth(10),
  },
  itemTitle: {
    fontSize: calculateResponsiveHeight(13),
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  upgradePushText: {
    fontFamily: "Montserrat-Bold",
    fontSize: calculateResponsiveHeight(10),
    color: "#fff",
  },
  actionBox: {
    height: calculateResponsiveHeight(132),
    alignSelf: "stretch",
    backgroundColor: "#323a5d",
    borderRadius: calculateResponsiveHeight(10),
    overflow: "hidden",
    marginBottom: calculateResponsiveHeight(10),
  },
  actionTop: {
    flexDirection: "row",
    height: calculateResponsiveHeight(83),
    backgroundColor: "#65729a",
  },
  actionImage: {
    width: calculateResponsiveWidth(100),
    height: "100%",
  },
  actionBottom: {
    marginTop: calculateResponsiveHeight(5),
    marginLeft: calculateResponsiveWidth(5),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
