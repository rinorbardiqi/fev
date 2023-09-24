import { TouchableOpacity, StyleSheet, Platform, View } from "react-native";
import { colorBasedOnScore } from "./helpers/colorBasedOnScore";
import { getHeight, getWidth } from "../../Util/screenOperations";
import StyledText from "../StyledText";

const SelectTest = ({
  score,
  id,
  label,
}: {
  id: number;
  score: number;
  label: string;
}) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, { borderLeftColor: colorBasedOnScore(score) }]}
    >
      <StyledText style={{ width: getWidth(48), fontSize: 12 }}>
        {label}
      </StyledText>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.fillBar,
            {
              width: (score * getWidth(91)) / 100,
              backgroundColor: colorBasedOnScore(score),
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};
export default SelectTest;
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    width: getWidth(182),
    height: getHeight(44),
    paddingHorizontal: getWidth(16),
    gap: 6,
    borderRadius: 7,
    borderLeftWidth: 7,
    backgroundColor: "#FFF",
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
    marginBottom: 16,
  },
  progressBar: {
    width: getWidth(91),
    height: 5,
    borderRadius: 10,
    backgroundColor: "#C0CDD6",
  },
  fillBar: {
    height: "100%",
    borderRadius: 8,
  },
});
