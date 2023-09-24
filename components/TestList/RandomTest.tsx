import { View, StyleSheet, Platform } from "react-native";
import StyledText from "../StyledText";
import { getHeight, getWidth } from "../../Util/screenOperations";
import SelectTest from "./SelectTest";

const RandomTest = () => {
  return (
    <View style={styles.wrapper}>
      <StyledText>Test i rastësishëm</StyledText>
      <View style={{ marginTop: getHeight(16) }}>
        <SelectTest score={0} label="Test 2" id={2} />
      </View>
    </View>
  );
};
export default RandomTest;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 24,
    flexDirection: "row",
    borderRadius: 7,
    backgroundColor: "#FFF",
    gap: 20,
    width: getWidth(396),
    height: getHeight(76),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: getHeight(16),
    paddingHorizontal: getWidth(24),
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
