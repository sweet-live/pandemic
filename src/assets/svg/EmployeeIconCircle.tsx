import * as React from "react";
import { View } from "react-native";
import { Svg, Path, G, Circle } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";
import { calculateResponsiveWidth } from "../../utils/responsive";

interface EmployeeIconI {
  d: number;
  fill?: string;
  marginLeft?: number;
}

const EmployeeIconCircle: React.FunctionComponent<EmployeeIconI> = ({
  d,
  fill = " #fff",
  marginLeft = 0,
}) => {
  return (
    <View
      style={{
        width: d,
        height: d,
        aspectRatio: 1,
        marginLeft: marginLeft,
      }}
    >
      <Svg width="100%" height="100%" viewBox="0 0 15 15">
        <G fill="none" fill-rule="evenodd" stroke={fill}>
          <Circle cx="7.5" cy="7.5" r="7" />
          <G stroke-linecap="round">
            <Path
              d="M6.708 6.333c0-1.104-1.492-2.666-3.333-2.666-1.841 0-3.333 1.562-3.333 2.666"
              transform="translate(4 4)"
            />
            <Path
              d="M3.375 3.668c1.013 0 1.833-.82 1.833-1.833S4.388 0 3.375 0c-1.012 0-1.833.821-1.833 1.834 0 1.012.82 1.833 1.833 1.833h0z"
              transform="translate(4 4)"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default EmployeeIconCircle;
