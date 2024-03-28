import { Button, Text, View } from "react-native";

import { useRouter } from "expo-router";

export default function ScreenOne() {
  const router = useRouter();
  return (
    <View>
      <Text>Screen one</Text>
      <Button
        title="Go to screen two"
        onPress={() => router.navigate("/two")}
      />
    </View>
  );
}
