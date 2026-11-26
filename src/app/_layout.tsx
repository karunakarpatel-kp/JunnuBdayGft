import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import centralStore from "../../Store/CentralStore";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Provider store={centralStore}>
        <Stack>
          <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
