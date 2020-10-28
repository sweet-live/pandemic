import * as React from "react";
import { View } from "react-native";
import { Svg, Path, G } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";
import { calculateResponsiveWidth } from "../../utils/responsive";

const EmployeeIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
  return (
    <View style={{ width: width, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 42 44">
        <G
          id="Page-1"
          stroke={fill}
          stroke-width="1.9"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
        >
          <G
            id="Daily-reward-screen-Copy"
            transform="translate(-46.000000, -475.000000)"
            stroke={fill}
            stroke-width="100"
          >
            <G id="Icon" transform="translate(48.000000, 477.000000)">
              <Path
                d="M38.0952381,32.4285714 C38.0952381,26.1171429 29.567619,21 19.047619,21 C8.52761905,21 0,26.1171429 0,32.4285714"
                id="Stroke-13"
              />
              <Path
                d="M19.4761905,20.952381 C25.2619048,20.952381 29.952381,16.2619048 29.952381,10.4761905 C29.952381,4.69047619 25.2619048,0 19.4761905,0 C13.6904762,0 9,4.69047619 9,10.4761905 C9,16.2619048 13.6904762,20.952381 19.4761905,20.952381 L19.4761905,20.952381 Z"
                id="Stroke-15"
              />
              <Path
                d="M38.0952381,32 L38.0952381,38.252381 C38.0952381,38.8104762 37.9057143,39.6190476 37.3533333,39.6190476 L1.21809524,39.6190476 C0.677142857,39.6190476 0,38.8038095 0,38.252381 L0,32"
                id="Stroke-17"
              />
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};

EmployeeIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#fff",
};
export default EmployeeIcon;
