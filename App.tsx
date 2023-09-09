import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Svg from "react-native-svg";
import { colors } from "./src/theme/colors";
import { Discovery } from "./src/pages/discovery";

export default function App() {
  return (
    <View style={styles.container}>
      <Discovery/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
