import { StyleSheet, View, Animated } from 'react-native'
import React from 'react'
import { ImageBackground, Image } from 'expo-image';

const IntroBackground = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;   // start invisible
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current; // start smaller

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/red_color.webp")}
        style={styles.mainBg}
      >
 
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          <Image
            source={require("../assets/images/animated_book.png")}
            style={styles.bookLogo}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  )
}

export default IntroBackground

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", 
    alignItems: "center", 
  },
  bookLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
})
