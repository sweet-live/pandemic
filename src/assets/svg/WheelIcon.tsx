import * as React from "react";
import { View } from "react-native";
import { Svg, Path, G, Circle } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";

const WheelIcon: React.SFC<SvgProps> = ({ height, fill }) => {
  return (
    <View style={{ width: height, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 22 22">
        <G fill="none" fill-rule="evenodd" transform="translate(1 1)">
          <Path
            fill="#65729A"
            d="M0 9H20V10.5H0z"
            transform="rotate(45 10 9.75)"
          />
          <Path fill="#FF685C" d="M10 0L10 9.3 17.107 2.752 14.24 0.675z" />
          <Path
            fill="#65729A"
            d="M1.464 12.536H11.464V14.036H1.464z"
            transform="rotate(135 6.464 13.286)"
          />
          <Path
            fill="#FF685C"
            d="M8 6H18V7.5H8z"
            transform="rotate(135 13 6.75)"
          />
          <Path stroke="#65729A" stroke-width="1.5" d="M20 10L10 10 10 20" />
          <Path
            stroke="#65729A"
            stroke-width="1.5"
            d="M10 0L0 0 0 10"
            transform="rotate(-180 5 5)"
          />
          <Path fill="#FF685C" d="M9.217 0L11 0 11 9 9.217 9z" />
          <Circle cx="10" cy="10" r="10" stroke={fill} stroke-width="1.5" />
          <Path
            fill="#FFF"
            d="M12.39 1.815L14.264 10.146 10.436 9.972z"
            transform="rotate(30 12.35 5.98)"
          />
          <Circle cx="10" cy="10" r="2" fill="#FFF" />
        </G>
      </Svg>
    </View>
  );
};

WheelIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#4AC1F9",
};

export default WheelIcon;
