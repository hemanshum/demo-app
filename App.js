import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "mrt-mid": require("./assets/fonts/Montserrat-Medium.ttf"),
    "mrt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mrt-xbold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>Enjoy the beauty of your custom fonts!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "mrt-xbold",
    fontSize: 30,
  },
  text: {
    fontFamily: "mrt-mid",
    fontSize: 16,
  },
});
