import React from "react";
import { Button, StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const OAuth = () => {
  // Each provider gets its own hook
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const githubAuth = useOAuth({ strategy: "oauth_github" });
  const facebookAuth = useOAuth({ strategy: "oauth_facebook" });

  const handleSignIn = async (providerOAuth: any) => {
    try {
      const { createdSessionId, setActive } = await providerOAuth.startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={() => handleSignIn(googleOAuth)} />
      <Button title="Sign in with Githubr" onPress={() => handleSignIn(githubAuth)} />
      <Button title="Sign in with Facebook" onPress={() => handleSignIn(facebookAuth)} />
    </View>
  );
};

export default OAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12, // if RN <0.71 doesn’t support gap, use marginTop instead
  },
});
