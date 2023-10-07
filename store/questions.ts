import { create } from "zustand";
export interface AnswerType {
  testId: number;
  selected: Record<string, number>;
}

interface TestStore {
  testSelectedIndex: number;
  selectedAnswers?: AnswerType[];
  upsertSelectedAnswers: (
    testId: number,
    selected_answers: AnswerType["selected"]
  ) => void;
  selectedQuestion: number;
  nextQuestion: () => void;
  lastQuestion: () => void;
  selectTest: (index: number) => void;
  resetAnswers: () => void;
}
export const useTestStore = create<TestStore>((set) => ({
  testSelectedIndex: 0,
  selectedQuestion: 0,
  selectedAnswers: undefined,
  upsertSelectedAnswers: (
    testId: number,
    selected_answers: {
      ans1_sel?: number;
      ans2_sel?: number;
      ans3_sel?: number;
    }
  ) => {
    const { selectedAnswers } = useTestStore.getState();
    const upsertState = useTestStore
      .getState()
      .selectedAnswers?.find((item) => item.testId === testId);
    set({
      selectedAnswers: upsertState
        ? selectedAnswers?.map((item) =>
            item.testId === testId
              ? {
                  testId,
                  selected: selected_answers,
                }
              : item
          )
        : selectedAnswers
        ? [...selectedAnswers, { testId, selected: selected_answers }]
        : [{ testId, selected: selected_answers }],
    });
  },
  nextQuestion: () => {
    set((state) => ({ selectedQuestion: state.selectedQuestion + 1 }));
  },
  lastQuestion: () => {
    set((state) => ({ selectedQuestion: state.selectedQuestion - 1 }));
  },
  selectTest: (index: number) => {
    set({ testSelectedIndex: index });
  },
  resetAnswers: () => {
    set({
      selectedAnswers: undefined,
      testSelectedIndex: 0,
      selectedQuestion: 0,
    });
  },
}));
