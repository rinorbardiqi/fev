import { create } from "zustand";
import { openDB } from "../database/openDb";
import { SQLiteDatabase } from "expo-sqlite";
import { QuestionType, ResultType } from "../util/databaseType";
import { AnswerType } from "./questions";

interface DatabaseStoreType {
  db?: SQLiteDatabase;
  percentageData?: ResultType[];
  questionsData?: QuestionType[];
  initDB: () => void;
  fetchPercentageData: () => void;
  fetchQuestionsByTestNumber: (testNumber: string) => void;
  updateSelectedAnswers: (selectedAns: AnswerType[]) => void;
}

const useDatabaseStore = create<DatabaseStoreType>((set) => ({
  db: undefined,
  percentageData: undefined,
  questionsData: undefined,

  initDB: async () => {
    const database = await openDB();
    set({ db: database });
  },

  fetchPercentageData: async () => {
    const { db } = useDatabaseStore.getState();
    const query = "SELECT * FROM Percentage";

    try {
      const result = await new Promise<ResultType[]>((resolve, reject) => {
        db?.transaction((tx) => {
          tx.executeSql(query, [], (_, results) => {
            resolve(results.rows._array as ResultType[]);
          });
        });
      });

      set({ percentageData: result });
    } catch (error) {
      console.error("Error fetching Percentage data:", error);
    }
  },

  fetchQuestionsByTestNumber: async (testNumber: string) => {
    const { db } = useDatabaseStore.getState();
    const query = `SELECT * FROM Questions WHERE testNo = ${testNumber}`;

    try {
      const result = await new Promise<QuestionType[]>((resolve, reject) => {
        db?.transaction((tx) => {
          tx.executeSql(query, [], (_, results) => {
            resolve(results.rows._array as QuestionType[]);
          });
        });
      });

      set({ questionsData: result });
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  },
  updateSelectedAnswers: async (selectedData: AnswerType[]) => {
    const { db } = useDatabaseStore.getState();

    try {
      await new Promise<void>((resolve, reject) => {
        db?.transaction((tx) => {
          selectedData.forEach(({ testId, selected }) => {
            // Make sure you handle null values appropriately if needed
            const ans1_sel = selected.ans1_sel || null;
            const ans2_sel = selected.ans2_sel || null;
            const ans3_sel = selected.ans3_sel || null;

            const query = `UPDATE Questions
              SET
                ans1_sel = ?,
                ans2_sel = ?,
                ans3_sel = ?
              WHERE ID = ?`;

            tx.executeSql(
              query,
              [ans1_sel, ans2_sel, ans3_sel, testId],
              (_, result) => {
                if (result.rowsAffected > 0) {
                  console.log(
                    `Updated ${result.rowsAffected} row(s) for testId ${testId}`
                  );
                } else {
                  console.log(`No rows were updated for testId ${testId}`);
                }
              }
            );
          });

          resolve();
        });
      });
    } catch (error) {
      console.error("Error updating selected answers:", error);
    }
  },
}));

export default useDatabaseStore;
