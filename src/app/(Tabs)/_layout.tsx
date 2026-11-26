import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TabsRootLayout = () => {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen
          name="(Home)"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }: any) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="(Search)/search"
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }: any) => {
              return (
                <Ionicons
                  name="search-circle-outline"
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="(Maps)/mapScreen"
          options={{
            title: "Maps",
            tabBarIcon: ({ color, size }: any) => (
              <Ionicons name="map-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(MyTrips)/MyTrips"
          options={{
            title: "MyTrips",
            tabBarIcon: ({ color, size }: any) => (
              <Ionicons name="trail-sign-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(More)/More"
          options={{
            title: "More",
            tabBarIcon: ({ color, size }: any) => (
              <Ionicons name="menu-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsRootLayout;
