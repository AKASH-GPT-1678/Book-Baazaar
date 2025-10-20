import { Stack } from "expo-router";
import { Text } from "react-native";
export default function SellerLayout() {
    return (
        <Stack>
            <Text>Hii</Text>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="newproduct" options={{ headerShown: false, contentStyle: { backgroundColor: "white" } }} />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />

        </Stack>
    );
}