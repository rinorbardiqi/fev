import { FlatList, Image, StyleSheet, View } from "react-native";
import Answer from "../QuestionBuilders/Answer";
import StyledText from "../StyledText";
import { getHeight, getWidth } from "../../util/screenOperations";
import HorizontalLine from "../../Svgs/HorizontalLine";
import QuestionHeader from "../QuestionBuilders/QuestionHeader";
import colors from "../../util/colors";
import Footer from "../QuestionBuilders/Footer";
import { useNavigation } from "@react-navigation/native";

const Question = ({
  testNumber,
  questionNumber,
  question,
  image,
  answers,
  onLeaveTest,
  isReview,
}: {
  testNumber?: number;
  questionNumber?: number;
  image?: string;
  question?: string;
  answers?: string[];
  isReview?: boolean;
  onLeaveTest?: () => void;
}) => {
  const leaveTest = () => {
    console.log("Leave test");
    onLeaveTest?.();
  };
  const goBack = () => {
    console.log("Last question");
  };
  const goForward = () => {
    console.log("Next question");
  };
  // mdoket po dashka me ja ba require perqdo foto qe e kemi?
  // po menoj me ba nje map [key: number]: string ku si string eshte pathi per secilen image
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
            renderItem={({ item }) => (
              <Answer
                // key={item}
                answer={item}
                onClick={(ans: string) => {
                  console.log(ans);
                }}
                isReview={isReview}
              />
            )}
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
