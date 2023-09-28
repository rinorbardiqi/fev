import { Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../util/colors";
import StyledText from "../StyledText";
import { getHeight, getWidth } from "../../util/screenOperations";
import BackButtonIcon from "../../Svgs/BackButton";

const BackButton = ({ backButtonHandle }: { backButtonHandle: () => void }) => {
  return (
    <TouchableOpacity style={style.Button} onPress={backButtonHandle}>
      <BackButtonIcon />
    </TouchableOpacity>
  );
};
export default BackButton;

const style = StyleSheet.create({
  Button: {
    width: getWidth(44),
    height: getWidth(44),
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.07)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
      },
      android: {
        elevation: 3, // Adjust this value to achieve the desired shadow effect
      },
    }),
  },
});
