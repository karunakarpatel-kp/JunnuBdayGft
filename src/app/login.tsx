import { router } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn) {
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Here is the Login Screen of the Application...!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 18,
  },
});
