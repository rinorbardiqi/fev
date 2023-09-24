import { useEffect, useState } from "react";
import { openDB } from "../database/openDb";
import { ScrollView, View, StyleSheet } from "react-native";
import { Header } from "../components/Header/Header";
import { Statistics } from "../components/Statistics/Statistics";
import TestList from "../components/TestList/TestList";
import { useFonts } from "expo-font";
import RandomTest from "../components/TestList/RandomTest";

export const Tests = () => {
  const [results, setResults] = useState<any>([]);
  useEffect(() => {
    openDB().then((db) =>
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM Percentage", [], (tx, results) => {
          setResults(results.rows._array);
        });
      })
    );
  }, []);
  const [loaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa-Variable.ttf"),
    "Comfortaa-Bold": require("../assets/fonts/static/Comfortaa-Bold.ttf"),
  });
  console.log("sssresults", results);
  if (!loaded) {
    return null;
  }
  const testStatistics = () => {
    let testsStat = {
      finished: 0,
      failed: 0,
      unfinished: 80 - results.length,
    };
    // results.forEach(element => {
    //   element.
    // });
    return testsStat;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <View style={styles.container}>
        <Header />
        <Statistics testStatistics={testStatistics()} />
        <RandomTest />
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
