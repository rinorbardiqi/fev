import { View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

const BackgroundGradient = ({ children }: { children: any }) => {
  const FROM_COLOR = "#FAFAFA";
  const TO_COLOR = "#AAAAAA";
  return (
    <View>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};
export default BackgroundGradient;
