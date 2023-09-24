import { FlatList, SafeAreaView } from "react-native";
import { tests } from "./Constant";
import SelectTest from "./SelectTest";
const TestList = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <FlatList
        scrollEnabled={false}
        data={tests()}
        renderItem={({ item }) => {
          return (
            <SelectTest
              id={item.id}
              score={item.score}
              label={item.label}
              key={item.id}
            />
          );
        }}
        keyExtractor={(item) => item.label}
        numColumns={2}
        style={{ flex: 1, padding: 16 }}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};
export default TestList;
