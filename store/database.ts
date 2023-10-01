import { create } from "zustand";
import { openDB } from "../database/openDb";
import { SQLiteDatabase } from "expo-sqlite";
import { QuestionType, ResultType } from "../util/databaseType";

interface DatabaseStoreType {
  db?: SQLiteDatabase;
  percentageData?: ResultType[];
  questionsData?: QuestionType[];
  initDB: () => void;
  fetchPercentageData: () => void;
  fetchQuestionsByTestNumber: (testNumber: string) => void;
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
}));

export default useDatabaseStore;
