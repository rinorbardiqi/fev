import { useEffect } from "react";
import { openDB } from "../database/openDb";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Header } from "../components/Header/Header";
import { Statistics } from "../components/Statistics/Statistics";
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
        <Text style={{ fontFamily: "Comfortaa" }}>asdasdas</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  centerText: {
    alignItems: "center",
    justifyContent: "center",
  },
});
