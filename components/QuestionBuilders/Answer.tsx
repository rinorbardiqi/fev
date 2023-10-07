import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "../StyledText";
import { getHeight, getWidth } from "../../util/screenOperations";
import colors from "../../util/colors";

const Answer = ({
  answer,
  onClick,
  isReview,
  isSelected,
  isCorrect,
}: {
  answer: string;
  onClick: (answer: string) => void;
  isReview?: boolean;
  isSelected?: boolean;
  isCorrect?: boolean;
}) => {
  console.log(answer);
  const style = styles(isReview, isCorrect, isSelected);
  return (
    <TouchableOpacity
      style={style.AnswerContainer}
      onPress={() => onClick(answer)}
      disabled={isReview}
    >
      <StyledText isSecondary={isSelected}>{answer}</StyledText>
    </TouchableOpacity>
  );
};
export default Answer;

const styles = (
  isReview?: boolean,
  isCorrect?: boolean,
  isSelected?: boolean
) =>
  StyleSheet.create({
    AnswerContainer: {
      ...Platform.select({
        ios: {
          shadowColor: "rgba(0, 0, 0, 0.07)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 15,
        },
        android: {
          elevation: 3, // Adjust this value to achieve the desired shadow effect
        },
      }),
      paddingHorizontal: getWidth(16),
      paddingVertical: getHeight(12),

      borderRadius: 7,
      borderLeftWidth: 7,
      borderLeftColor: reviewMap(true, isReview, isCorrect),
      backgroundColor: reviewMap(isSelected, isReview, isCorrect),
      marginBottom: getHeight(24),
    },
  });
// Pass `true` to isSelected to pass it
const reviewMap = (
  isSelected?: boolean,
  isReview?: boolean,
  isCorrect?: boolean
) => {
  if (!isSelected) return colors.white;
  if (!isReview) return colors.gray;
  if (!isCorrect) return colors.red;
  return colors.green;
};
