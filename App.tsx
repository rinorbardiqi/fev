import { ScrollView, View } from "react-native";
import { Tests } from "./pages/Tests";
import Question from "./components/Question/Question";
import { useFonts } from "expo-font";
import TestList from "./components/TestList/TestList";

export default function App() {
  const [loaded] = useFonts({
    Comfortaa: require("./assets/fonts/Comfortaa-Variable.ttf"),
    "Comfortaa-Bold": require("./assets/fonts/static/Comfortaa-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <Tests></Tests> */}
      <Question
        testNumber={14}
        questionNumber={18}
        answers={[
          "blah",
          "bladsasdasdasdasdadsadsadh",
          "bla1hdsdsasdasadadssdasdadsa",
          "3asdasd",
        ]}
        question="A eshte e lejuar per bicikleten qe te kaloje ne kete situa?"
      />
    </View>
  );
}
