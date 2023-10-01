import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { FilterTest } from "./Constant";
import React, { useState } from "react";
import { getHeight, getWidth } from "../../util/screenOperations";
import StyledText from "../StyledText";
import { colorBasedOnScore } from "./helpers/colorBasedOnScore";
import colors from "../../util/colors";

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
                ? { ...styles.wrapper, backgroundColor: colors.blue }
                : {
                    ...styles.wrapper,
                    backgroundColor: colors.white,
                  }
            }
            onPress={() => onActiveFilterChange(item.id)}
          >
            <StyledText isSecondary={item.active} style={{ fontSize: 12 }}>
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
