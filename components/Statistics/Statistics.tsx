import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import TestChart from "../StatisticsBuilders/TestChart";
import TestDetails from "../StatisticsBuilders/TestDetails";
import { getHeight, getWidth } from "../../Util/screenOperations";

export default interface TestStatistics {
  finished: number;
  failed: number;
  unfinished: number;
}

export const Statistics = ({ testStatistics }: { testStatistics?: TestStatistics }) => {
  return (
    <View style={styles.Wrapper}>
      <TestDetails testStatistics={testStatistics}/>
      <TestChart testStatistics={testStatistics}/>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: getWidth(40),
    height: getWidth(240),
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
