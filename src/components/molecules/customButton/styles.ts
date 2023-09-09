import { StyleSheet } from "react-native";

import { metrics } from "../../../theme/metrics";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: metrics.padding.sm,
    paddingHorizontal: metrics.padding.xl,
    width: "90%",
    marginTop: metrics.margin.xl,
    alignItems: "center",
    borderRadius: metrics.radius.md,
  },

  title: {
    color: "white",
    fontSize: 16,
  },
});
