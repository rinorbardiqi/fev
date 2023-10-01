import { View } from "react-native";
import { useEffect } from "react";
import Question from "../components/Question/Question";
import useDatabaseStore from "../store/database";
import { QuestionProp } from "../util/databaseType";

const Questions = ({
  route,
  navigation,
}: {
  route: QuestionProp["route"];
  navigation: QuestionProp["navigation"];
}) => {
  const { testNumber } = route.params; // Make sure this line is correctly receiving the prop
  // console.log("testNumber", testNumber);
  const { fetchQuestionsByTestNumber, questionsData } = useDatabaseStore();
  useEffect(() => {
    fetchQuestionsByTestNumber?.(testNumber);
  }, []);
  if (!questionsData) return null;
  return (
    <View>
      <Question
        question={questionsData?.[0].question}
        testNumber={questionsData?.[0].testNo}
        questionNumber={1}
        answers={[
          questionsData?.[0].ans1 ?? "",
          questionsData?.[0].ans2 ?? "",
          questionsData?.[0].ans3 ?? "",
        ]}
        onLeaveTest={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};
export default Questions;
