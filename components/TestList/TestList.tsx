import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";
import { tests } from "./Constant";
import SelectTest from "./SelectTest";
import { getWidth } from "../../Util/screenOperations";
import StyledText from "../StyledText";
import FilterList from "./FilterList";
import HorizontalLine from "../../Svgs/HorizontalLine";
const TestList = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, width: "100%", paddingHorizontal: getWidth(24) }}
    >
      <StyledText isBold style={{ fontSize: 24, color: "#161616" }}>
        Testet
      </StyledText>
      <FilterList />
      <View style={{ marginBottom: 16 }}>
        <HorizontalLine />
      </View>
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
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};
export default TestList;
