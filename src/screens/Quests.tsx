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
import Button from "../components/utilities/Button";
import LoadingBar from "../components/utilities/LoadingBar";
interface QuestsI {
  title: string;
  reward: string;
  status: {
    current: number;
    required: number;
  };
  type: string;
}

const Quests = () => {
  const [selectedType, setSelectedType] = useState("Vaccine");
  const data: QuestsI[] = [
    {
      title: "Upgrade Vaccine to Level 5",
      reward: "25,000",
      status: {
        current: 4,
        required: 5,
      },
      type: "Vaccine",
    },

    {
      title: "Upgrade Vaccine to Level 10",
      reward: "15,000",
      status: {
        current: 4,
        required: 10,
      },
      type: "Medicine",
    },

    {
      title: "Upgrade Vaccine to Level 15",
      reward: "50,000",
      status: {
        current: 4,
        required: 15,
      },
      type: "Others",
    },

    {
      title: "Upgrade Vaccine to Level 20",
      reward: "50,000",
      status: {
        current: 4,
        required: 20,
      },
      type: "Vaccine",
    },

    {
      title: "Upgrade Vaccine to Level 25",
      reward: "75,000",
      status: {
        current: 4,
        required: 25,
      },
      type: "Medicine",
    },
  ];
  interface SelectedQuestI {
    quest: any;
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.boosticon}>
          <BookIcon height={17} fill={"#4ac1f9"} />
        </View>
        <Text style={styles.titletext}>QUESTS</Text>
      </View>
      <View>
        <View style={styles.questtypecontainer}>
          <Button
            onPress={() => setSelectedType("Vaccine")}
            text="Vaccine"
            active={selectedType === "Vaccine"}
          />
          <Button
            onPress={() => setSelectedType("Medicine")}
            text="Medicine"
            active={selectedType === "Medicine"}
          />
          <Button
            onPress={() => setSelectedType("Others")}
            text="Others"
            active={selectedType === "Others"}
          />
        </View>

        <FlatList
          data={data.filter(
            ({ type }: { type: string }) => type === selectedType
          )}
          keyExtractor={(item, index) => `quest-item-${index}`}
          renderItem={({ item, index }) => {
            console.log((item.status.current / item.status.required) * 305);
            return (
              <View style={styles.questbox}>
                <View style={styles.questcontainer}>
                  <Text style={styles.questdesc}>{item.title}</Text>
                  <View style={styles.questinfo}>
                    <View style={styles.questreward}>
                      <Text style={styles.rewardtext}>Reward: </Text>
                      <Text style={styles.reward}>${item.reward}</Text>
                    </View>
                    <View style={styles.questprogress}>
                      <Text style={styles.progresstext}>Status: </Text>
                      <Text style={styles.progress}>
                        {item.status.current} / {item.status.required}lvl
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: calculateResponsiveHeight(8) }}>
                    <LoadingBar
                      width={305}
                      current={item.status.current}
                      total={item.status.required}
                      backgroundColor="#48527b"
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#485378",
    color: "black",
    padding: calculateResponsiveWidth(20),
    paddingBottom: 0,
    paddingTop: calculateResponsiveHeight(30),
  },
  questtypecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    marginBottom: calculateResponsiveHeight(20),
    marginTop: calculateResponsiveHeight(27),
  },
  type: {
    width: calculateResponsiveWidth(105),
    height: calculateResponsiveHeight(39),
    borderRadius: calculateResponsiveHeight(7),
    borderWidth: 2,
    borderColor: "#4ac1f9",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  typeText: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(12),
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: calculateResponsiveHeight(21),
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

  questbox: {
    width: calculateResponsiveWidth(335),
    height: calculateResponsiveHeight(69),
    borderRadius: calculateResponsiveHeight(10),
    backgroundColor: "#65729a",
    marginBottom: calculateResponsiveHeight(10),
    flexDirection: "column",
  },
  questdesc: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  questinfo: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  questreward: {
    flexDirection: "row",
    justifyContent: "center",
  },
  questprogress: {
    flexDirection: "row",
  },
  rewardtext: {
    fontFamily: "Montserrat",
    color: "#fff",
    fontSize: calculateResponsiveHeight(10),
  },
  reward: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
    fontSize: calculateResponsiveHeight(10),
  },
  progresstext: {
    fontFamily: "Montserrat",
    color: "#fff",
  },
  progress: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  barcontainer: {
    width: calculateResponsiveWidth(305),
    height: calculateResponsiveHeight(5),
    backgroundColor: "#48527b",
    borderRadius: calculateResponsiveHeight(9.5),
    marginTop: calculateResponsiveHeight(8),
  },
  progressbar: {
    height: calculateResponsiveHeight(5),
    borderRadius: calculateResponsiveHeight(9.5),
    backgroundColor: "#3cd5ff",
  },
  questcontainer: {
    margin: 15,
  },
});
export default Quests;
