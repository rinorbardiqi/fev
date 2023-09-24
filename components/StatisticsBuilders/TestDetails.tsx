import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

const TestDetails = ({
  finished,
  failed,
  unfinished,
}: {
  finished?: number;
  failed?: number;
  unfinished?: number;
}) => {
  return (
    <View style={style.TestDetailsCenter}>
      <Text style={style.TestDetailHeader}>Statistikat</Text>
      <TestDetail color="#4FCA82" number={finished} text="Të perfunduara" />
      <TestDetail color="#FF5D5D" number={failed} text="Të dështuara" />
      <TestDetail color="#C0CDD6" number={unfinished} text="Të thata" />
    </View>
  );
};
export default TestDetails;

const TestDetail = ({
  color,
  text,
  number,
}: {
  color: string;
  text: string;
  number?: number;
}) => {
  return (
    <View style={style.TestDetailContainer}>
      {/* SVG Circle */}
      <Svg width={12} height={12}>
        <Circle cx={6} cy={6} r={6} fill={color} />
      </Svg>

      <Text style={style.TestDetailNumber}>({number ?? 0})</Text>
      <Text style={style.TestDetailText}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  TestDetailsCenter: {
    display: "flex",
    justifyContent: "center",
  },
  TestDetailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,

    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 8,

    marginTop: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  TestDetailNumber: {
    fontSize: 14,
  },
  TestDetailText: {
    fontSize: 12,
  },
  TestDetailHeader: {
    fontSize: 22,
    marginBottom: 7,
  },
});
