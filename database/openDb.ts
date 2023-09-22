import { openDatabase } from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
export const openDB = async () => {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "SQLite"
    );
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require("../assets/AutoshkollaDb.db")).uri,
    FileSystem.documentDirectory + "SQLite/AutoshkollaDb.db"
  );
  return openDatabase("AutoshkollaDb.db");
};
