import * as React from "react";
import { View } from "react-native";
import { Svg, G, Path } from "react-native-svg";
import SvgProps from "../../../interfaces/SvgProps";

const BookIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
  return (
    <View style={{ width: width, height: height, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 22 19">
        <G
          fill="none"
          fill-rule="evenodd"
          stroke={fill}
          stroke-linejoin="round"
          stroke-width="1.429"
        >
          <Path d="M9.925 15.79V2.255" transform="translate(1 1)" />
          <Path
            stroke-linecap="round"
            d="M0 14.887V.667C0 .425.427.452.676.452h5.865c1.37 0 2.844.774 3.497 1.858M19.85 14.887V.667c0-.243.023-.216-.226-.216h-5.865c-1.372 0-3.07.768-3.721 1.857M.451 15.338h6.287c1.322 0 2.714.604 3.412 1.525M19.85 15.338h-6.287c-1.322 0-2.715.604-3.413 1.525"
            transform="translate(1 1)"
          />
        </G>
      </Svg>
    </View>
  );
};
BookIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#4AC1F9",
};
export default BookIcon;
