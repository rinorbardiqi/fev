import { StyleSheet, View } from "react-native";
import colors from "../../util/colors";
import { getHeight, getWidth } from "../../util/screenOperations";
import StyledText from "../StyledText";

const QuestionInfo = ({
  testNumber,
  questionNumber,
}: {
  testNumber: number;
  questionNumber: number;
}) => {
  const formattedString = `Testi ${testNumber} | Pyetja ${questionNumber}/30`;
  return (
    <View style={style.Wraper}>
      <StyledText style={style.String} isBold>
        {formattedString}
      </StyledText>
    </View>
  );
};
export default QuestionInfo;

const style = StyleSheet.create({
  Wraper: {
    borderRadius: 15,
    backgroundColor: colors.pink,
    paddingHorizontal: getWidth(24),
    paddingVertical: getHeight(10),
    justifyContent: "center",
  },
  String: {
    fontSize: 12,
  },
});
