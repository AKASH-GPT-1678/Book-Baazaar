import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { ClerkProvider } from '@clerk/clerk-expo'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import "./global.css";
export default function RootLayout() {
  const clerk_key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ClerkProvider publishableKey={clerk_key}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(zproduct)" options={{ headerShown: false }} />
            <Stack.Screen name="signin" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
          </Stack>
        </ClerkProvider>
      </PersistGate>
    </Provider>
  );
}
