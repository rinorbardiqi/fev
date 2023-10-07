import { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Header } from "../components/Header/Header";
import { Statistics } from "../components/Statistics/Statistics";
import TestList from "../components/TestList/TestList";
import RandomTest from "../components/TestList/RandomTest";
import useDatabaseStore from "../store/database";
import { ResultType } from "../util/databaseType";

const Tests = () => {
  const { fetchPercentageData, percentageData } = useDatabaseStore();
  console.log("perectageData", percentageData);
  useEffect(() => {
    fetchPercentageData();
  }, []);
  const testStatistics = () => {
    let testsStat = {
      finished: 0,
      failed: 0,
      unfinished: 80,
    };
    if (percentageData) {
      testsStat.unfinished = 80 - percentageData.length;
    }

    percentageData?.forEach((item: ResultType) => {
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
        <RandomTest results={percentageData} />
        <TestList results={percentageData} />
      </View>
    </ScrollView>
  );
};
export default Tests;

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
