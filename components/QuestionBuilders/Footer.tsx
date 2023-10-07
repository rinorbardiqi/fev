import { StyleSheet, TouchableOpacity, View } from "react-native";
import { getHeight, getWidth } from "../../util/screenOperations";
import colors from "../../util/colors";
import StyledText from "../StyledText";

const Footer = ({
  backHandle,
  forwardHandle,
}: {
  backHandle: () => void;
  forwardHandle: () => void;
}) => {
  return (
    <View style={style.Wrapper}>
      <TouchableOpacity onPress={backHandle} style={style.BackButton}>
        <StyledText isSecondary>Kthehu</StyledText>
      </TouchableOpacity>
      <TouchableOpacity onPress={forwardHandle} style={style.ForwardButton}>
        <StyledText isSecondary>Vazhdo</StyledText>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const style = StyleSheet.create({
  Wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: getWidth(24),
    gap: getWidth(16),
    padding: getWidth(24),
    backgroundColor: colors.white,
  },
  BackButton: {
    backgroundColor: colors.red,
    borderRadius: 45,
    paddingHorizontal: getWidth(24),
    paddingVertical: getHeight(12),
    justifyContent: "center",
    alignItems: "center",
  },
  ForwardButton: {
    backgroundColor: colors.green,
    width: getWidth(270),
    borderRadius: 45,
    paddingHorizontal: getWidth(24),
    paddingVertical: getHeight(12),
    justifyContent: "center",
    alignItems: "center",
  },
});
