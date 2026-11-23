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
          name="(Bookings)/bookings"
          options={{
            title: "Bookings",
            tabBarIcon: ({ color, size }: any) => (
              <Ionicons name="bookmark-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(Profile)/profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }: any) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsRootLayout;
