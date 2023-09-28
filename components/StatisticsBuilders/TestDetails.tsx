import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { getHeight, getWidth } from "../../util/screenOperations";
import StyledText from "../StyledText";
import TestStatistics from "../Statistics/Statistics";
import colors from "../../util/colors";

const TestDetails = ({
  testStatistics,
}: {
  testStatistics?: TestStatistics;
}) => {
  const { finished, failed, unfinished } = { ...testStatistics };
  return (
    <View style={style.TestDetailsCenter}>
      <StyledText isBold style={style.TestDetailsHeader}>
        Statistikat
      </StyledText>
      <TestDetail
        color={colors.green}
        number={finished}
        text="Të perfunduara"
      />
      <TestDetail color={colors.red} number={failed} text="Të dështuara" />
      <TestDetail color={colors.gray} number={unfinished} text="Të thata" />
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
  // Circle Size
  const crSz = getWidth(12) / 2;
  return (
    <View style={style.TestDetailContainer}>
      <View style={{ alignItems: "center", marginTop: 4 }}>
        {/* SVG Circle */}
        <Svg width={crSz * 2} height={crSz * 2}>
          <Circle cx={crSz} cy={crSz} r={crSz} fill={color} />
        </Svg>
      </View>

      <StyledText style={style.TestDetailNumber}>({number ?? 0})</StyledText>
      <StyledText style={style.TestDetailText}>{text}</StyledText>
    </View>
  );
};

const style = StyleSheet.create({
  TestDetailsCenter: {
    display: "flex",
    justifyContent: "center",
  },
  TestDetailsHeader: {
    fontSize: getHeight(24),
  },
  TestDetailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // gap: getWidth(8),

    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,

    marginTop: 4,
    paddingHorizontal: getWidth(8),
    paddingVertical: getHeight(4),
  },
  TestDetailNumber: {
    fontSize: getHeight(14),
    textAlign: "center",
    width: getWidth(35),
  },
  TestDetailText: {
    fontSize: getHeight(12),
  },
});
