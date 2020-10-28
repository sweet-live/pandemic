import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BoostsIcon from "../assets/svg/stats/BoostsIcon";
import DiamondIcon from "../assets/svg/DiamondIcon";
import { TouchableHighlight } from "react-native-gesture-handler";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../utils/responsive";
import CrossIcon from "../assets/svg/CrossIcon";

interface BoostsI {
  title: string;
  price: number;
  discount?: {
    type: "low" | "high";
    value: number;
  };
}

const Boosts = ({ navigation }) => {
  const data: BoostsI[] = [
    {
      title: "All profit x2",
      price: 10,
    },
    {
      title: "All profit x3",
      price: 15,
    },
    {
      title: "All profit x5",
      price: 25,
    },
    {
      title: "All profit x10",
      price: 45,
      discount: {
        type: "low",
        value: 10,
      },
    },
    {
      title: "All profit x20",
      price: 80,
      discount: {
        type: "low",
        value: 20,
      },
    },
    {
      title: "5 lvl of vaccine",
      price: 100,
      discount: {
        type: "high",
        value: 50,
      },
    },
  ];
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
          <BoostsIcon height={20} fill={"#4ac1f9"} />
        </View>
        <Text style={styles.titletext}>BOOSTS</Text>
      </View>
      <View style={styles.boostscontainer}>
        <View style={styles.boostsbox}>
          <View style={styles.boostsinfo}>
            <Text style={styles.boostdesc}>All proffits x2</Text>
            <View style={styles.boostprice}>
              <Text style={styles.pricetext}>Price:</Text>
              <DiamondIcon height={10} fill="#4ac1f9" />
              <Text style={styles.price}>10</Text>
            </View>
          </View>
          <TouchableHighlight
            underlayColor="#1a5063"
            activeOpacity={0.5}
            style={styles.boostbutton}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.upgradetext}>UPGRADE</Text>
          </TouchableHighlight>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item, index) => `boost-item-${index}`}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.boostsbox}>
                <View style={styles.boostsinfo}>
                  <Text style={styles.boostdesc}>{item.title}</Text>
                  <View style={styles.boostprice}>
                    <Text style={styles.pricetext}>Price:</Text>
                    <DiamondIcon height={10} fill="#4ac1f9" />
                    <Text style={styles.price}>{item.price}</Text>
                    {item.discount && (
                      <View
                        style={[
                          styles.discountbox,
                          item.discount.type === "high" && {
                            backgroundColor: "#ff685c",
                          },
                        ]}
                      >
                        <Text style={styles.discounttext}>
                          Save -{item.discount.value}%
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <TouchableHighlight
                  underlayColor="#1a5063"
                  activeOpacity={0.5}
                  style={styles.boostbutton}
                  onPress={() => alert(`Pressed item ${index}`)}
                >
                  <Text style={styles.upgradetext}>UPGRADE</Text>
                </TouchableHighlight>
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
    padding: calculateResponsiveHeight(5),
    paddingBottom: 0,
    paddingTop: calculateResponsiveHeight(21),
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
    elevation: 8,
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
export default Boosts;
