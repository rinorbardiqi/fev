import { View, StyleSheet } from "react-native";
import LogoSvg from "../../Svgs/Logo";

export const Header = () => {
  return (
    <View style={styles.HederWrapper}>
      <LogoSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  HederWrapper: {
    height: 70,
    width: "100%",
    paddingLeft: 16,
    alignContent: "center",
    borderBottomColor: "#C0CDD6",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
});
