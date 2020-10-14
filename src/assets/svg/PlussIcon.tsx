import * as React from "react";
import { View } from "react-native";
import { Svg, G, Rect } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";

const PlusIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
  return (
    <View style={{ width: width, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 10 10">
        <G fill={fill} fill-rule="evenodd">
          <Rect width="10" height="2" y="4" rx="1" />
          <Rect width="10" height="2" y="4" rx="1" transform="rotate(90 5 5)" />
        </G>
      </Svg>
    </View>
  );
};
PlusIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#fff",
};
export default PlusIcon;
