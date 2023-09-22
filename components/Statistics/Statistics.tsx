import { View, StyleSheet, Text } from "react-native";
import Svg from "react-native-svg";
import { VictoryLabel, VictoryPie } from "victory-native";

export const Statistics = () => {
  return (
    <View style={styles.Wrapper}>
      <Text>Stats</Text>
      <View style={{ position: "relative" }}>
        <Svg viewBox="0 0 300 300">
          <VictoryPie
            width={200}
            height={200}
            data={[
              { x: 1, y: 120 },
              { x: 2, y: 100 },
            ]}
            innerRadius={30}
            style={{ labels: { fontSize: 20, fill: "white" } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 20 }}
            x={150}
            y={150}
            text="Pie!"
          />
        </Svg>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 204,
    width: "100%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
});
