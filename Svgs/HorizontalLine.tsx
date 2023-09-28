import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const HorizontalLine = (props: SvgProps) => (
  <Svg width={"100%"} height={2} fill="none" {...props}>
    <Path stroke="#C0CDD6" d="M0 1h380" />
  </Svg>
);
export default HorizontalLine;
