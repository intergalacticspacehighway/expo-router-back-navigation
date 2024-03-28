import { Button, Text } from "react-native";

import { useRouter } from "expo-router";
import { View } from "@/components/Themed";

export default function Two() {
  const router = useRouter();

  return (
    <View>
      <Text>Screen Two</Text>
      <Button
        title="Go to user page"
        onPress={() => router.navigate("/user/nishan")}
      />
    </View>
  );
}
