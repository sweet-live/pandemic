import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BoostsIcon from "../assets/svg/stats/BoostsIcon";
import DiamondIcon from "../assets/svg/DiamondIcon";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../utils/responsive";
import CrossIcon from "../assets/svg/CrossIcon";
import FastImage from "react-native-fast-image";
import doctor from "../assets//images/WideDoctor.png";
import DollarIcon from "../assets/svg/DollarIcon";
import { ClipPath } from "react-native-svg";
import { color } from "react-native-reanimated";
import EmployeesBox from "../components/EmployeesBox";
import EmployeeIcon from "../assets/svg/EmployeeIcon";

interface EmployeesI {
  title: string;
  employees: 0 | 1 | 2 | 3;
  navigation: any;
}

interface dataI {
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

const Employees: React.FunctionComponent<EmployeesI> = ({ navigation }) => {
  const employeesData: dataI[] = [
    {
      name: "John Doe",
      role: "Manager",
      specSkill: "Can instantly finish a task",
      levelNow: 4,
      levelMax: 5,
      speed: "x1.25",
      coolDown: "60min",
      nextLevel: {
        level: 5,
        speed: "x1.30",
        coolDown: "50min",
      },
    },

    {
      name: "John Doe",
      role: "Manager",
      specSkill: "Can instantly finish a task",
      levelNow: 4,
      levelMax: 5,
      speed: "x1.25",
      coolDown: "60min",
      nextLevel: {
        level: 5,
        speed: "x1.30",
        coolDown: "50min",
      },
    },

    {
      name: "John Doe",
      role: "Manager",
      specSkill: "Can instantly finish a task",
      levelNow: 4,
      levelMax: 5,
      speed: "x1.25",
      coolDown: "60min",
      nextLevel: {
        level: 5,
        speed: "x1.30",
        coolDown: "50min",
      },
    },

    {
      name: "John Doe",
      role: "Manager",
      specSkill: "Can instantly finish a task",
      levelNow: 4,
      levelMax: 5,
      speed: "x1.25",
      coolDown: "60min",
      nextLevel: {
        level: 5,
        speed: "x1.30",
        coolDown: "50min",
      },
    },

    {
      name: "John Doe",
      role: "Manager",
      specSkill: "Can instantly finish a task",
      levelNow: 4,
      levelMax: 5,
      speed: "x1.25",
      coolDown: "60min",
      nextLevel: {
        level: 5,
        speed: "x1.30",
        coolDown: "50min",
      },
    },
  ];

  const { title, employees } = navigation.state.params;
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
      <Text style={styles.title}>EMPLOYEES</Text>
      <FastImage
        source={doctor}
        style={{
          width: "100%",
          height: calculateResponsiveHeight(70),
          alignItems: "center",
          justifyContent: "center",
          marginTop: calculateResponsiveHeight(17),
        }}
        resizeMode="contain"
      >
        <Text style={styles.buildingTitle}>{title}</Text>
      </FastImage>
      <View style={styles.employeesBoxes}>
        <View style={styles.box}>
          <View style={styles.iconContainer}>
            <EmployeeIcon width={calculateResponsiveWidth(10)} fill="#4ac1f9" />
          </View>
          <View
            style={{
              marginLeft: calculateResponsiveWidth(5),
            }}
          >
            <Text style={styles.textName}>John Doe</Text>
            <Text style={styles.roleText}>Manager</Text>
          </View>
        </View>

        <View style={[styles.box, { backgroundColor: "#404970" }]}>
          <View style={[styles.iconContainer, { backgroundColor: "#536087" }]}>
            <EmployeeIcon width={calculateResponsiveWidth(10)} fill="#fff" />
          </View>
          <View
            style={{
              marginLeft: calculateResponsiveWidth(5),
            }}
          >
            <Text style={styles.textName}>No employee</Text>
            <Text style={styles.roleText}>Unknown</Text>
          </View>
        </View>

        <View style={[styles.box, { backgroundColor: "#404970" }]}>
          <View style={[styles.iconContainer, { backgroundColor: "#536087" }]}>
            <EmployeeIcon width={calculateResponsiveWidth(10)} fill="#fff" />
          </View>
          <View
            style={{
              marginLeft: calculateResponsiveWidth(5),
            }}
          >
            <Text style={styles.textName}>No employee</Text>
            <Text style={styles.roleText}>Unknown</Text>
          </View>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={employeesData}
        keyExtractor={(item, index) => `employee-item-${index}`}
        renderItem={({ item, index }) => {
          return <EmployeesBox {...item}></EmployeesBox>;
        }}
      />
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
    paddingTop: calculateResponsiveHeight(21),
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: calculateResponsiveHeight(18),
    fontFamily: "Montserrat-Bold",
  },
  buildingTitle: {
    color: "#fff",
    fontSize: calculateResponsiveHeight(14),
    fontFamily: "Montserrat-Bold",
  },
  iconContainer: {
    width: calculateResponsiveWidth(20),
    height: calculateResponsiveWidth(20),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: calculateResponsiveHeight(3.6),
    marginLeft: calculateResponsiveWidth(10),
  },
  box: {
    width: calculateResponsiveWidth(105),
    height: calculateResponsiveWidth(40),
    borderRadius: calculateResponsiveHeight(10),
    backgroundColor: "#4ac1f9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  employeesBoxes: {
    marginTop: calculateResponsiveHeight(10),
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    marginBottom: calculateResponsiveHeight(10),
  },
  textName: {
    fontFamily: "Montserrat-Bold",
    fontSize: calculateResponsiveHeight(8),
    color: "#fff",
  },
  roleText: {
    fontFamily: "Montserrat",
    fontSize: calculateResponsiveHeight(6),
    color: "#fff",
  },
});

export default Employees;
