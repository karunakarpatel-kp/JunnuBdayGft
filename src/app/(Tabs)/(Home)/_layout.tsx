import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreenLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home Screen",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Bus/busId"
          options={{
            title: "Bus Id",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Route/route"
          options={{
            title: "Route",
            headerShown: true,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default HomeScreenLayout;
