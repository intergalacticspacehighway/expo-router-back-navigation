import { useRouter } from "expo-router";
import { Button, View, Text } from "react-native";

export default function User() {
  const router = useRouter();
  return (
    <View>
      <Text>User page</Text>
      <Button title="Go back" onPress={router.back} />
    </View>
  );
}
