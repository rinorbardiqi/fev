import { ScrollView } from "react-native";

import { Tests } from "./pages/Tests";

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Tests />
    </ScrollView>
  );
}
