import { Text } from "react-native";

const StyledText = (props: any) => {
  return (
    <Text
      style={[
        props.style,
        { fontFamily: props.isBold ? "Comfortaa-Bold" : "Comfortaa" },
      ]}
    >
      {props.children}
    </Text>
  );
};
export default StyledText;
