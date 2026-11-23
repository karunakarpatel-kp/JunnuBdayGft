import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>Here is the Home Screen Which is Inside Tabs Folder </Text>
      <Link href={"/Bus/busId"} style={styles.link}>
        Go to Bus Id Page.
      </Link>
      <Link href={"/Route/route"} style={styles.link}>
        Go to Root Page.
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  link: {
    backgroundColor: "lightblue",
    fontSize: 20,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    marginHorizontal: 17,
  },
});
