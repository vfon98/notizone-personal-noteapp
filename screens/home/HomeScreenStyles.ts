import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  cardList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    // borderColor: 'red',
    // borderWidth: StyleSheet.hairlineWidth
  },
  cardItem: {
    // marginBottom: 8,
    // marginEnd: 8,
    flexBasis: "50%",
    borderRadius: 4,
    overflow: 'hidden',
    padding: 4,
  },
  cardTitle: {
    position: "absolute",
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: '100%',
    padding: 4,
    fontSize: 10
  },
  cardDesc: {
    padding: 4,
    fontSize: 10
  },
  cardInfo: {
    padding: 4,
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  cardButtonAdd: {
    flexBasis: "50%",
    // width: 100,
    height: '100%',
    display: 'flex',
    alignSelf: 'stretch',
  },
});
