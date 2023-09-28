import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";
import SelectTest from "./SelectTest";
import { getWidth } from "../../Util/screenOperations";
import StyledText from "../StyledText";
import FilterList from "./FilterList";
import HorizontalLine from "../../Svgs/HorizontalLine";
import { ResultType } from "../../pages/Tests";
import { updateScores } from "./Constant";
import { useState } from "react";
const TestList = ({ results }: { results: ResultType[] }) => {
  const [activeFilter, setActiveFilter] = useState(1);
  const updateFilter = (id: number) => {
    setActiveFilter(id);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, width: "100%", paddingHorizontal: getWidth(24) }}
    >
      <StyledText isBold style={{ fontSize: 24, color: "#161616" }}>
        Testet
      </StyledText>
      <FilterList updateFilter={updateFilter} />
      <View style={{ marginBottom: 16 }}>
        <HorizontalLine />
      </View>
      <FlatList
        scrollEnabled={false}
        data={updateScores(results, activeFilter)}
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
