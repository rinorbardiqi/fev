import { Dimensions } from "react-native";

const getWidth = (width: number) => {
  return Math.round((width / 428) * Dimensions.get("window").width);
};
const getHeight = (height: number) => {
  return Math.round((height / 900) * Dimensions.get("window").height);
};
export { getHeight, getWidth };
