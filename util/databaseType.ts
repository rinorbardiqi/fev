import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface QuestionType {
  ID: number;
  testNo: number;
  points: number;
  image?: string | null;
  question: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans1_cor: number;
  ans2_cor: number;
  ans3_cor: number;
  ans1_sel?: number | null;
  ans2_sel?: number | null;
  ans3_sel?: number | null;
  correct?: number | null;
}
export interface ResultType {
  test: number;
  perc: number;
}
export type ScreenType = {
  Tests: undefined;
  Questions: { testNumber: string };
};
export type QuestionProp = NativeStackScreenProps<ScreenType, "Questions">;
