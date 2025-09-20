import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { ClerkProvider } from '@clerk/clerk-expo'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from "./Env";
import "./global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="signin" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
          </Stack>
        </ClerkProvider>
      </PersistGate>
    </Provider>
  );
}
