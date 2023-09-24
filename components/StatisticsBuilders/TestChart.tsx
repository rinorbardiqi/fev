import { View, StyleSheet, Text } from "react-native";
import PieChart from "react-native-pie-chart";
import { getWidth } from "../../Util/screenOperations";
import StyledText from "../StyledText";
import TestStatistics from "../Statistics/Statistics";

const TestChart = ({ testStatistics: tS }: { testStatistics?: TestStatistics }) => {
  const testsSums = tS ? tS.unfinished + tS.failed + tS.finished : 0;
  const series = tS ? [tS.unfinished, tS.failed, tS.finished] : [1];
  const sliceColors = tS ? ["#C0CDD6", "#FF5D5D", "#4FCA82"] : ["#C0CDD6"];

  return (
    <View style={style.TestChartContainer}>
      <StyledText style={style.CenterLabel}>{testsSums}</StyledText>
      <PieChart
        widthAndHeight={getWidth(140)}
        series={series}
        sliceColor={sliceColors}
        coverRadius={0.7}
      />
    </View>
  );
};
export default TestChart;

const style = StyleSheet.create({
  TestChartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  CenterLabel: {
    position: "absolute",
    fontSize: 24,
  },
});
