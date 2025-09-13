import 'react-native-gesture-handler'; // This import should be at the very top
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

  );
}
