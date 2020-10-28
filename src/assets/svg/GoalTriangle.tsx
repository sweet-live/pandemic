import * as React from "react";
import { View } from "react-native";
import { Svg, Polygon, G } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";

const GoalTriangle: React.SFC<SvgProps> = ({ width, height, fill }) => {
  return (
    <View style={{ width: width, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 32 39">
        <G
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <G
            id="Daily-reward-screen"
            transform="translate(-172.000000, -475.000000)"
            fill="#4AC1F9"
            stroke="#FFFFFF"
            stroke-width="3"
          >
            <Polygon
              id="Triangle"
              transform="translate(188.000000, 495.500000) rotate(-360.000000) translate(-188.000000, -495.500000) "
              points="188 479 201 512 175 512"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

GoalTriangle.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#fff",
};

export default GoalTriangle;
