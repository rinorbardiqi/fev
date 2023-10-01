import { ScrollView, View } from "react-native";
import { Tests } from "./pages/Tests";
import { useFonts } from "expo-font";
import TestList from "./components/TestList/TestList";
import { useState } from "react";
import Questions from "./pages/Questions";

export default function App() {
  const [loaded] = useFonts({
    Comfortaa: require("./assets/fonts/Comfortaa-Variable.ttf"),
    "Comfortaa-Bold": require("./assets/fonts/static/Comfortaa-Bold.ttf"),
  });
  const [selectedTest, setSelectedTest] = useState<number>(0);
  const [isReview, setIsReview] = useState<boolean>();
  const setTest = (id: number) => {
    setSelectedTest(id);
  };
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      {selectedTest ? (
        <Questions testNumber={selectedTest} isReview={isReview} />
      ) : (
        <Tests setSelectedTest={setTest} />
      )}
    </View>
  );
}
