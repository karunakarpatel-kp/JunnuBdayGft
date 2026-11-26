import { Link } from "expo-router";
import { View, Text } from "react-native";

const MyTripsScreen = () => {
  return (
    <View>
      <Text>Here is the Booking Screen...!</Text>
      <Link href={"/(Home)/"}>Link To Home Screen</Link>
    </View>
  );
};

export default MyTripsScreen;
