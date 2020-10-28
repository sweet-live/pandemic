import * as React from "react";
import { View } from "react-native";
import { Svg, G, Path } from "react-native-svg";
import SvgProps from "../../interfaces/SvgProps";

const CrossIcon: React.SFC<SvgProps> = ({ width, fill }) => {
  return (
    <View style={{ width: width, height: width, aspectRatio: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20">
        <Path
          fill="#FFF"
          fill-rule="evenodd"
          d="M2.318.398L10 8.079 17.682.398c.53-.53 1.39-.53 1.92 0s.53 1.39 0 1.92L11.921 10l7.681 7.682c.53.53.53 1.39 0 1.92s-1.39.53-1.92 0L10 11.921l-7.682 7.681c-.53.53-1.39.53-1.92 0s-.53-1.39 0-1.92L8.079 10 .398 2.318c-.53-.53-.53-1.39 0-1.92s1.39-.53 1.92 0z"
        />
      </Svg>
    </View>
  );
};

CrossIcon.defaultProps = {
  width: "auto",
  height: "auto",
  fill: "#fff",
};
export default CrossIcon;
