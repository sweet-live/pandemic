import * as React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";

const PaperClipIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
  return (
    <View style={{ width: width, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 13 20">
        <Path
          fill="none"
          fill-rule="evenodd"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.659"
          d="M12.057 7.634V6.53C12.057 3.475 9.582 1 6.53 1 3.475 1 1 3.475 1 6.529v7.187M4.317 8.74V6.529c0-1.222.99-2.212 2.212-2.212 1.22 0 2.211.99 2.211 2.212v6.634c0 1.221-.99 2.211-2.211 2.211m-2.212-3.317v1.106m7.74-1.659v1.659c0 3.053-2.475 5.528-5.528 5.528-1.507 0-2.873-.602-3.87-1.58"
        />
      </Svg>
    </View>
  );
};

PaperClipIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#fff",
};

export default PaperClipIcon;
