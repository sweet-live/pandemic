import { StyleSheet, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../../utils/responsive";
import React from "react";

interface LoadingBarI {
  current: number;
  total: number;
  width: number;
  height?: number;
  backgroundColor?: string;
  foregroundColor?: string;
}

const LoadingBar: React.FunctionComponent<LoadingBarI> = ({
  current,
  total,
  width,
  height = 5,
  foregroundColor = "#3cd5ff",
  backgroundColor = "#65729a",
}) => {
  return (
    <View
      style={[
        styles.barcontainer,
        {
          width: calculateResponsiveWidth(width),
          height: calculateResponsiveHeight(height),
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View
        style={[
          styles.progressbar,
          {
            width: calculateResponsiveWidth((current / total) * width),
            height: calculateResponsiveHeight(height),
            backgroundColor: foregroundColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barcontainer: {
    backgroundColor: "#65729a",
    borderRadius: calculateResponsiveHeight(9.5),
  },
  progressbar: {
    borderRadius: calculateResponsiveHeight(9.5),
    backgroundColor: "#3cd5ff",
  },
});

export default LoadingBar;
