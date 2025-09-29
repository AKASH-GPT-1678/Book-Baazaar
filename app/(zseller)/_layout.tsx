import { Stack } from "expo-router";

export default function SellerLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="newproduct" options={{ headerShown: false,contentStyle : {backgroundColor : "white"}  }} />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />

        </Stack>
    );
}