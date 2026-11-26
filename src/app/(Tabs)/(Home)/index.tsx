import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white dark:bg-black p-6">
      <Text className="text-gray-900 dark:text-white text-lg mb-4">
        Here is the Home Screen Which is Inside Tabs Folder
      </Text>
      <Link href={"/Bus/busId"}>
        <Text className="py-5 text-red-500 text-3xl font-bold">Go to Bus Id Page.</Text>
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
