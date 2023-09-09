import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { metrics } from "../../../theme/metrics";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    color: "white",
    fontSize: 32,
    marginTop: 72,
  },

  subtitle: {
    marginTop: metrics.margin.sm,
    color: colors.subtitle,
    textAlign: "center",
  },

  slide: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    borderRadius: 10,
  },

  paginationContainer: {
    marginTop: 10,
  },

  paginationDot: {
    width: 50,
    height: 8,
    borderRadius: metrics.radius.xxl,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    marginHorizontal: -6,
  },

  inactivePaginationDot: {
    width: 30,
    height: 12,
    backgroundColor: "#d8d8d8",
    marginHorizontal: -14,
  },
});
