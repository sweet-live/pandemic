import React, { ReactComponentElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import DiamondIcon from "../assets/svg/DiamondIcon";
import PlussIcon from "../assets/svg/PlussIcon";
import BloodIcon from "../assets/svg/BloodIcon";
import EnergyIcon from "../assets/svg/stats/EnergyIcon";
import HealthIcon from "../assets/svg/stats/HealthIcon";
import DollarIcon from "../assets/svg/stats/DollarIcon";
import SyringeIcon from "../assets/svg/stats/SyringeIcon";
import BoostIcon from "../assets/svg/stats/BoostsIcon";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../utils/responsive";
import { TouchableOpacity } from "react-native-gesture-handler";
import BookIcon from "../assets/svg/stats/BookIcon";
import WheelIcon from "../assets/svg/WheelIcon";
import PaperClipIcon from "../assets/svg/PaperClipIcon";
import { processFontFamily } from "expo-font";
import LoadingBar from "../components/utilities/LoadingBar";
import Button from "../components/utilities/Button";
import EmployeeIcon from "../assets/svg/EmployeeIcon";
import BuildingContainer from "../components/BuildingContainer";

//Images
import doctor from "../assets/images/doctor.png";

// interface UpgradeBuildingsI {
// 	title: string;
// 	level: number;
// 	result: }

export default function Home() {
  // const data: any[] = [
  // 	{
  // 		title: "Services",
  // 		data: []
  // 	}
  // 	{
  // 		title: "Buildings",
  // 		data: [{
  // 			title: "Medicine point",
  // 			level: "19",
  // 			result: <Text>Saving</Text>,
  // 			earnings
  // 		}]
  // 	}
  // ]

  const iconDim = calculateResponsiveHeight(18);
  const plusDim = calculateResponsiveHeight(10);
  return (
    <View style={styles.container}>
      <View style={styles.currencies}>
        <View style={styles.currenciesItem}>
          <SyringeIcon height={iconDim} fill={"#4ac1f9"} />
          <Text style={styles.currenciesItemValue}>123</Text>
          <TouchableOpacity style={styles.currenciesAddCurrency}>
            <PlussIcon height={plusDim} />
          </TouchableOpacity>
        </View>
        <View style={styles.currenciesItem}>
          <DiamondIcon height={iconDim} fill={"#4ac1f9"} />
          <Text style={styles.currenciesItemValue}>123</Text>
          <TouchableOpacity style={styles.currenciesAddCurrency}>
            <PlussIcon height={plusDim} />
          </TouchableOpacity>
        </View>
        <View style={styles.currenciesItem}>
          <BoostIcon height={iconDim} fill={"#4ac1f9"} />
          <Text style={styles.currenciesItemValue}>123</Text>
          <TouchableOpacity style={styles.currenciesAddCurrency}>
            <PlussIcon height={plusDim} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.player}>
        <View style={styles.playerImage}>
          <Image
            source={require("../assets/images/placeholder.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.playerInfo}>
          <View style={styles.infectedAmmount}>
            <View style={styles.infectedIcon}>
              <BloodIcon height={14} />
            </View>
            <Text style={styles.infectedNumber}>8 400 399 100</Text>
            <Text style={styles.infectedText}> infected</Text>
          </View>
          <View style={styles.playerStats}>
            <View style={styles.playerStatsItem}>
              <EnergyIcon height={14} fill={"#4ac1f9"} />
              <View style={{ flexDirection: "row", marginLeft: 5 }}>
                <Text style={styles.statsNumber}>49</Text>
                <Text style={styles.infectedText}> /100</Text>
              </View>
            </View>
            <View style={styles.playerStatsItem}>
              <HealthIcon height={14} fill={"#4ac1f9"} />
              <View style={{ flexDirection: "row", marginLeft: 5 }}>
                <Text style={styles.statsNumber}>7</Text>
                <Text style={styles.infectedText}> /10</Text>
              </View>
            </View>
            <View style={styles.playerStatsItem}>
              <DollarIcon height={14} fill={"#4ac1f9"} />
              <View style={{ flexDirection: "row", marginLeft: 5 }}>
                <Text style={styles.statsNumber}>1.24m</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.gameScreen}>
        <View style={styles.sideMenu}>
          <TouchableOpacity style={styles.sideMenuItem}>
            <BookIcon height={calculateResponsiveHeight(25)} fill="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem}>
            <BoostIcon height={calculateResponsiveHeight(25)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem}>
            <WheelIcon height={calculateResponsiveHeight(25)} fill="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.actionBox}>
            <View style={styles.actionTop}>
              <View style={styles.actionImage}>
                <TouchableOpacity>
                  <ImageBackground
                    source={require("../assets/images/placeholder_action.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PaperClipIcon height={calculateResponsiveHeight(18)} />
                    <Text style={styles.upgradePushText}>Tap to start</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.itemTitle}>Vaccine</Text>
                <Text style={styles.textCategory}>
                  Level: <Text style={styles.textInfo}>19</Text>
                </Text>
                <Text style={styles.textCategory}>
                  Results: <Text style={styles.textInfo}>100 vaccines</Text> per
                  click
                </Text>
                <View style={{ marginTop: calculateResponsiveHeight(7) }}>
                  <LoadingBar
                    width={187}
                    height={4}
                    current={70}
                    total={100}
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
                    0h 1m 19s
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
                    $10,000
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
                    fill="#48c665"
                    marginRight={calculateResponsiveWidth(5)}
                  />
                  <EmployeeIcon
                    d={calculateResponsiveWidth(15)}
                    fill="#fff"
                    marginRight={calculateResponsiveWidth(5)}
                  />
                  <EmployeeIcon d={calculateResponsiveWidth(15)} fill="#fff" />
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

          <BuildingContainer
            title="Medicine Point"
            level={19}
            result1Text="Saving: "
            result1="20 people per click"
            result2Text="Earnings: "
            result2="$550 per min"
            timeNow={70}
            timeTotal={100}
            employees={0}
            upgradePrice={140000}
            picture={doctor}
          ></BuildingContainer>
          <View style={styles.actionBox}>
            <View style={styles.actionTop}>
              <View style={styles.actionImage}>
                <Image
                  source={require("../assets/images/placeholder_action.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
            <View />
          </View>
          <View style={styles.actionBox}>
            <View style={styles.actionTop}>
              <View style={styles.actionImage}>
                <Image
                  source={require("../assets/images/placeholder_action.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
            <View />
          </View>
          <View style={styles.actionBox}>
            <View style={styles.actionTop}>
              <View style={styles.actionImage}>
                <Image
                  source={require("../assets/images/placeholder_action.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
            <View />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

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
  container: {
    flex: 1,
    backgroundColor: "#485378",
    padding: 5,
    paddingBottom: 0,
  },
  currencies: {
    marginTop: calculateResponsiveHeight(35),
    marginBottom: calculateResponsiveHeight(10),
    height: calculateResponsiveHeight(30),
    flexDirection: "row",
  },
  currenciesItem: {
    backgroundColor: "#65729a",
    width: "32%",
    marginRight: "2%",
    borderRadius: calculateResponsiveHeight(10),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: calculateResponsiveWidth(10),
    paddingRight: calculateResponsiveWidth(3),
  },
  currenciesItemValue: {
    color: "#fff",
    fontSize: calculateResponsiveHeight(13),
    fontFamily: "Montserrat-Bold",
  },
  currenciesAddCurrency: {
    width: calculateResponsiveWidth(24),
    height: calculateResponsiveHeight(24),
    borderRadius: calculateResponsiveHeight(7),
    borderWidth: 2,
    borderColor: "#536087",
    alignItems: "center",
    justifyContent: "center",
  },
  player: {
    height: calculateResponsiveHeight(65),
    backgroundColor: "#65729a",
    borderRadius: calculateResponsiveHeight(10),
    padding: 5,
    overflow: "hidden",
    flexDirection: "row",
  },
  playerImage: {
    width: calculateResponsiveWidth(55),
    borderRadius: calculateResponsiveHeight(10),
  },
  playerInfo: {
    marginLeft: calculateResponsiveWidth(10),
  },
  infectedAmmount: {
    paddingVertical: calculateResponsiveHeight(4),
    flexDirection: "row",
    //alignItems: 'center'
  },
  infectedNumber: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(18),
  },
  infectedText: {
    fontSize: calculateResponsiveHeight(10),
    fontFamily: "Montserrat",
    textAlignVertical: "bottom",
    color: "#fff",
    lineHeight: calculateResponsiveHeight(19),
  },
  infectedIcon: {
    width: calculateResponsiveWidth(24),
    height: calculateResponsiveHeight(24),
    backgroundColor: "#ff685c",
    borderRadius: calculateResponsiveHeight(7),
    lineHeight: calculateResponsiveHeight(22),
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    marginRight: calculateResponsiveWidth(5),
  },
  playerStats: {
    flexDirection: "row",
  },
  playerStatsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: calculateResponsiveWidth(15),
  },
  statsNumber: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(15),
  },
  gameScreen: {
    flex: 1,
    flexDirection: "row",
    marginTop: calculateResponsiveHeight(10),
  },
  sideMenu: {
    width: calculateResponsiveWidth(60),
  },
  sideMenuItem: {
    width: calculateResponsiveWidth(50),
    height: calculateResponsiveWidth(50),
    borderWidth: 2,
    borderColor: "#4ac1f9",
    borderRadius: calculateResponsiveHeight(10),
    marginBottom: calculateResponsiveHeight(10),
    justifyContent: "center",
    alignItems: "center",
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
