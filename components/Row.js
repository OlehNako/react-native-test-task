import { StyleSheet, View } from "react-native";

// main row
const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// styles of main row
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Row;
