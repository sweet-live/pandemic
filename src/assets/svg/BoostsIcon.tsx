import * as React from "react";
import { View } from "react-native";
import { Svg, G, Path } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";

const BoostsIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
  return (
    <View style={{ width: width, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 100% 100%">
        <G
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <Path
            stroke={fill}
            d="M4.128 11.934l4.052 4.813c.072.086.19.085.262 0l4.057-4.82M1.123 6.438C.805 6 .576 5.493.461 4.945c-.055-.26-.083-.528-.083-.804C.378 1.958 2.17.189 4.38.189c1.825 0 3.364 1.204 3.847 2.851l.167.003C8.877 1.396 10.416.192 12.24.192c2.21 0 4.003 1.77 4.003 3.952 0 .276-.028.545-.083.805-.118.563-.357 1.082-.69 1.53"
            transform="translate(1 1)"
          />
          <Path
            stroke={"#fff"}
            d="M0.369 9.315L3.452 9.258 5.165 6.698 7.635 11.121 9.737 9.444 15.867 9.444"
            transform="translate(1 1)"
          />
        </G>
      </Svg>
    </View>
  );
};
BoostsIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#fff",
};
export default BoostsIcon;
