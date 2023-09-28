import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";
import StyledText from "../StyledText";
import QuestionInfo from "./QuestionInfo";
import { getHeight, getWidth } from "../../util/screenOperations";

const QuestionHeader = ({
  backButtonHandle,
  testNumber,
  questionNumber,
}: {
  backButtonHandle: () => void;
  testNumber: number;
  questionNumber: number;
}) => {
  return (
    <View style={style.Wrapper}>
      <BackButton backButtonHandle={backButtonHandle} />
      <QuestionInfo testNumber={testNumber} questionNumber={questionNumber} />
      <View style={{width: getWidth(44)}}></View>
    </View>
  );
};
export default QuestionHeader;

const style = StyleSheet.create({
  Wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "stretch",
    marginHorizontal: getWidth(24),
    marginBottom: getHeight(8),
  },
});
