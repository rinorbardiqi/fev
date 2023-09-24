import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import TestChart from "../StatisticsBuilders/TestChart";
import TestDetails from "../StatisticsBuilders/TestDetails";

interface TestDetails {
  finished: number;
  failed: number;
  unfinished: number;
}

export const Statistics = ({ testDetails }: { testDetails?: TestDetails }) => {
  return (
    <View style={styles.Wrapper}>
      <TestDetails {...testDetails} />
      <TestChart {...testDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    height: 204,
    width: "100%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
});
