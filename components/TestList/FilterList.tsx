import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { FilterTest } from "./Constant";
import React, { useState } from "react";
import { getHeight, getWidth } from "../../util/screenOperations";
import StyledText from "../StyledText";

const FilterList = ({
  updateFilter,
}: {
  updateFilter: (id: number) => void;
}) => {
  const [filters, setFilters] = useState(FilterTest);
  const onActiveFilterChange = (id: number) => {
    updateFilter(id);
    setFilters((prev) =>
      prev.map((item) => ({ ...item, active: item.id === id }))
    );
  };
  return (
    <FlatList
      horizontal
      data={filters}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={
              item.active
                ? { ...styles.wrapper, backgroundColor: "#1765AD" }
                : {
                    ...styles.wrapper,
                    backgroundColor: "#C0CDD6",
                  }
            }
            onPress={() => onActiveFilterChange(item.id)}
          >
            <StyledText style={{ color: "#FFF", fontSize: 12 }}>
              {item.label}
            </StyledText>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export default FilterList;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: getWidth(24),
    paddingVertical: getHeight(10),
    backgroundColor: "#FFF",
    borderRadius: 50,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 24,
  },
});
