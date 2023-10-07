import { FlatList, Image, StyleSheet, View } from "react-native";
import Answer from "../QuestionBuilders/Answer";
import StyledText from "../StyledText";
import { getHeight, getWidth } from "../../util/screenOperations";
import HorizontalLine from "../../Svgs/HorizontalLine";
import QuestionHeader from "../QuestionBuilders/QuestionHeader";
import colors from "../../util/colors";
import Footer from "../QuestionBuilders/Footer";
import { AnswerType, useTestStore } from "../../store/questions";
import useDatabaseStore from "../../store/database";
import { QuestionProp } from "../../util/databaseType";

const Question = ({
  testNumber,
  questionNumber,
  question,
  image,
  answers,
  onLeaveTest,
  isReview,
  navigation,
  questionId,
}: {
  testNumber?: number;
  questionNumber?: number;
  image?: string;
  question?: string;
  answers?: string[];
  isReview?: boolean;
  onLeaveTest?: () => void;
  questionId?: number;
  navigation: QuestionProp["navigation"];
}) => {
  const {
    upsertSelectedAnswers,
    resetAnswers,
    selectedAnswers,
    nextQuestion,
    lastQuestion,
  } = useTestStore();
  const { updateSelectedAnswers } = useDatabaseStore();
  const leaveTest = () => {
    resetAnswers();
    onLeaveTest?.();
  };
  const goBack = () => {
    if (Number(questionNumber) > 0) lastQuestion();
  };
  const goForward = () => {
    if (questionNumber === 30) {
      updateSelectedAnswers(selectedAnswers as AnswerType[]);
      navigation.navigate("Tests");
    } else {
      nextQuestion();
    }
  };

  return (
    <View>
      <Image
        style={style.Image}
        source={require("../../assets/img_1001.png")}
      ></Image>
      {/* <BackgroundGradient> https://medium.com/@ibrahimozdogan/adding-gradient-in-react-native-f75ddd02aea4 */}
      <View style={style.FormWrapper}>
        <QuestionHeader
          testNumber={testNumber ?? 0}
          questionNumber={questionNumber ?? 0}
          backButtonHandle={leaveTest}
        ></QuestionHeader>
        {/* Question */}
        <StyledText style={style.Question}>{question}</StyledText>
        {/* Answers */}
        <View style={style.AnswerContainer}>
          <HorizontalLine />
          <FlatList
            scrollEnabled={true}
            data={answers}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => {
              const selectedAns = selectedAnswers?.find(
                (item) => item.testId === questionId
              )?.selected;
              return (
                <Answer
                  key={item}
                  answer={item}
                  onClick={() => {
                    const updatedSelectedAnswers = selectedAnswers
                      ?.map((item) => {
                        if (item.testId === Number(questionId)) {
                          return {
                            testId: Number(questionId),
                            selected: {
                              ...item.selected,
                              [`ans${index + 1}_sel`]: item.selected[
                                `ans${index + 1}_sel`
                              ]
                                ? 0
                                : 1,
                            },
                          };
                        }
                      })
                      .filter(Boolean);
                    upsertSelectedAnswers(
                      Number(questionId),
                      updatedSelectedAnswers?.[0]?.selected ?? {
                        ans1_sel: index + 1 === 1 ? 1 : 0,
                        ans2_sel: index + 1 === 2 ? 1 : 0,
                        ans3_sel: index + 1 === 3 ? 1 : 0,
                      }
                    );
                  }}
                  isReview={isReview}
                  isSelected={
                    selectedAns?.[`ans${index + 1}_sel`] === 1 ? true : false
                  }
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
      {/* </BackgroundGradient> */}

      <Footer backHandle={goBack} forwardHandle={goForward} />
    </View>
  );
};
export default Question;

const style = StyleSheet.create({
  FormWrapper: {
    height: getHeight(500),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
    paddingTop: getHeight(24),
  },
  AnswerContainer: {
    height: getHeight(330),
    gap: getHeight(24),
    marginHorizontal: getWidth(16),
  },
  Question: {
    marginHorizontal: getWidth(32),
    textAlign: "center",
    fontSize: getHeight(24),
    marginBottom: getHeight(12),
  },
  Image: {
    height: getHeight(323),
    width: getWidth(428),
    marginBottom: getHeight(-34),
  },
});
