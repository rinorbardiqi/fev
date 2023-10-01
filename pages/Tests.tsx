import { useEffect, useState } from "react";
import { openDB } from "../database/openDb";
import { ScrollView, View, StyleSheet } from "react-native";
import { Header } from "../components/Header/Header";
import { Statistics } from "../components/Statistics/Statistics";
import TestList from "../components/TestList/TestList";
import { useFonts } from "expo-font";
import RandomTest from "../components/TestList/RandomTest";
export interface ResultType {
  test: number;
  perc: number;
}
export const Tests = ({
  setSelectedTest,
}: {
  setSelectedTest: (id: number) => void;
}) => {
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
  console.log("sssresults", results);
  const testStatistics = () => {
    let testsStat = {
      finished: 0,
      failed: 0,
      unfinished: 80 - results.length,
    };
    results.forEach((item: ResultType) => {
      if (item.perc > 84) {
        testsStat.finished += 1;
      } else {
        testsStat.failed += 1;
      }
    });
    return testsStat;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <View style={styles.container}>
        <Header />
        <Statistics testStatistics={testStatistics()} />
        <RandomTest results={results} />
        <TestList setSelectedTest={setSelectedTest} results={results} />
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
