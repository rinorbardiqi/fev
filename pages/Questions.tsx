import { View } from "react-native";
import { useEffect } from "react";
import Question from "../components/Question/Question";
import useDatabaseStore from "../store/database";
import { QuestionProp } from "../util/databaseType";
import { useTestStore } from "../store/questions";

const Questions = ({
  route,
  navigation,
}: {
  route: QuestionProp["route"];
  navigation: QuestionProp["navigation"];
}) => {
  const { testNumber } = route.params;
  const { selectedQuestion, testSelectedIndex, selectTest } = useTestStore();
  const { fetchQuestionsByTestNumber, questionsData } = useDatabaseStore();
  useEffect(() => {
    fetchQuestionsByTestNumber?.(testNumber);
    selectTest(Number(testNumber));
  }, [testNumber]);
  if (!questionsData || !testNumber) return null;
  return (
    <View>
      <Question
        question={questionsData?.[selectedQuestion].question}
        testNumber={testSelectedIndex}
        questionNumber={selectedQuestion + 1}
        questionId={questionsData?.[selectedQuestion].ID}
        answers={[
          questionsData?.[selectedQuestion].ans1 ?? "",
          questionsData?.[selectedQuestion].ans2 ?? "",
          questionsData?.[selectedQuestion].ans3 ?? "",
        ]}
        onLeaveTest={() => {
          navigation.goBack();
        }}
        navigation={navigation}
      />
    </View>
  );
};
export default Questions;
