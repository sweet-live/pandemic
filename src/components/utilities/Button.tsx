import { StyleSheet, Text } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native";

import {
  calculateResponsiveHeight,
  calculateResponsiveWidth,
} from "../../utils/responsive";
import React from "react";

interface Button {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  containerStyles?: any;
  active?: boolean;
  fontSize?: number;
}

const Button: React.FunctionComponent<Button> = ({
  containerStyles = {},
  text,
  onPress,
  disabled = false,
  active = true,
  fontSize = 10,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        active && !disabled && styles.containerActive,
        { ...containerStyles },
      ]}
    >
      <Text
        style={[styles.text, { fontSize: calculateResponsiveHeight(fontSize) }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: calculateResponsiveWidth(105),
    height: calculateResponsiveHeight(39),
    borderRadius: calculateResponsiveHeight(7),
    borderWidth: 2,
    borderColor: "#4ac1f9",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerActive: {
    backgroundColor: "#4ac1f9",
    borderWidth: 0,
    borderColor: "#4ac1f9",
  },

  text: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
});

export default Button;
