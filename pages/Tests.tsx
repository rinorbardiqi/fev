import { useEffect } from "react";
import { openDB } from "../database/openDb";
import { ScrollView, View, StyleSheet } from "react-native";
import { Header } from "../components/Header/Header";
import { Statistics } from "../components/Statistics/Statistics";
import TestList from "../components/TestList/TestList";
import SelectTest from "../components/TestList/SelectTest";
import { useFonts } from "expo-font";

export const Tests = () => {
  useEffect(() => {
    openDB().then((db) =>
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM Questions", [], (tx, results) => {
          console.log(results.rows);
          console.log("success");
        });
      })
    );
  }, []);
  const [loaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa-Variable.ttf"),
    "Comfortaa-Bold": require("../assets/fonts/static/Comfortaa-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const testStatistics = { finished: 30, failed: 25, unfinished: 25 };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <View style={styles.container}>
        <Header />
        <Statistics testStatistics={testStatistics} />
        <SelectTest score={0} label="Test 1" id={1} />
        <TestList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
