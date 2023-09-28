import { Text } from "react-native";
import colors from "../util/colors";

const StyledText = ({
  style,
  isBold,
  isSecondary,
  children,
}: {
  style?: any;
  isBold?: boolean;
  isSecondary?: boolean;
  children?: any;
}) => {
  return (
    <Text
      style={[
        style,
        {
          fontFamily: isBold ? "Comfortaa-Bold" : "Comfortaa",
          color: isSecondary ? colors.white : colors.primary,
        },
      ]}
    >
      {children}
    </Text>
  );
};
export default StyledText;
