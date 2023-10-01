import { View } from "react-native";
import StyledText from "../components/StyledText";
import { useEffect, useState } from "react";
import { openDB } from "../database/openDb";

interface Answer {
  id: number;
  testNo: number;
  points: number;
  image?: string;
  question: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans1_cor: string;
  ans2_cor: string;
  ans3_cor: string;
  ans1_sel?: string;
  ans2_sel?: string;
  ans3_sel?: string;
  correct: number;
}

const Questions = ({
  testNumber,
  isReview,
}: {
  testNumber: number;
  isReview?: boolean;
}) => {
  const [answerList, setAnswerList] = useState<any>();
  useEffect(() => {
    openDB().then(
      (db) => {
        console.log(`blahhh ${db._name}`);
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM Questions WHERE testNo == 1",
            [],
            (tx, results) => {
              setAnswerList(results.rows.item);
            },
            (sql, err) => {
              console.log(`${err}\n ${sql}`);
              return false;
            }
          );
        });
      }
      // db.exec([{ sql: "PRAGMA foreign_keys = ON;", args: [] }], false, () =>
      //   console.log("Foreign keys turned on")
      // )
    );
    console.log(answerList);
  }, []);
  const toAnswerList = (data?: any) => (data ? (data as Answer[]) : undefined);
  return (
    <View>
      <StyledText>{"\n" + "blahh"}</StyledText>
    </View>
  );
};
export default Questions;
