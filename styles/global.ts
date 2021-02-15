import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  themeWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 32,
    paddingHorizontal: 16
  },

  flexCenter: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  my8: {
    marginVertical: 8
  },
  mx8: {
    marginHorizontal: 8
  },
  mt8: {
    marginTop: 8,
  },
  p8: {
    padding: 8,
  },
  p16: {
    padding: 16,
  },
});
