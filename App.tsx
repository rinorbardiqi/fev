import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import useDatabaseStore from "./store/database";
import Tests from "./pages/Tests"; // Import your Tests component
import Questions from "./pages/Questions"; // Import your Questions component
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenType } from "./util/databaseType";

const Stack = createStackNavigator<ScreenType>();

export default function App() {
  const [loaded] = useFonts({
    Comfortaa: require("./assets/fonts/Comfortaa-Variable.ttf"),
    "Comfortaa-Bold": require("./assets/fonts/static/Comfortaa-Bold.ttf"),
  });

  const { initDB } = useDatabaseStore();

  useEffect(() => {
    initDB(); // Initialize the database connection
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tests"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tests" component={Tests} />
        <Stack.Screen name="Questions" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
