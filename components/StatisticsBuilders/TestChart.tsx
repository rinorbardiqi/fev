import { View, StyleSheet, Text } from "react-native";
import PieChart from "react-native-pie-chart";

const TestChart = ({
  finished,
  failed,
  unfinished,
}: {
  finished?: number;
  failed?: number;
  unfinished?: number;
}) => {
  const dataAvailable = finished && failed && unfinished
  const totalTests = dataAvailable ? finished + failed + unfinished : 0;
  const series = dataAvailable ? [unfinished, failed, finished] : [1];
  const sliceColors = dataAvailable ? ["#C0CDD6", "#FF5D5D", "#4FCA82"] : ["#C0CDD6"];
  return (
    <View style={style.TestChartContainer}>
      <Text style={style.CenterLabel}>{totalTests}</Text>
      <PieChart
        widthAndHeight={140}
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
