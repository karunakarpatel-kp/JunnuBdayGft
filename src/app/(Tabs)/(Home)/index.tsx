import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white dark:bg-black p-6 items-center justify-center">
      <Text className="text-gray-900 dark:text-white text-lg font-semibold mb-8 text-center">
        Here is the Home Screen Which is Inside Tabs Folder
      </Text>

      <Link href={"/Bus/busId"}>
        <View className="w-full py-5 bg-red-500 dark:bg-red-600 rounded-lg items-center">
          <Text className="text-white text-sm font-bold ">
            Go to Bus Id In Which we see Bus Details.
          </Text>
        </View>
      </Link>
      <Link href={"/Route/route"} className="mt-4">
        <View className="w-full py-4 bg-blue-500 dark:bg-blue-600 rounded-lg items-center">
          <Text className="text-white text-lg font-semibold">
            Go to Root Page.
          </Text>
        </View>
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
