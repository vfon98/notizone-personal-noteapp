import { Layout, Button, Card, Text, Divider } from "@ui-kitten/components";
import React from "react";
import { SafeAreaView } from "react-native";
import { globalStyles } from "../../styles/global";
// import { Button } from "react-native-elements";
import { styles } from "./HomeScreenStyles";
import { NotedCardList } from "./quick-notes/NotedCardList";

interface Props {}

export const HomeScreen = (props: Props) => {
  return (
    <Layout style={globalStyles.themeWrapper}>
      <Text category="h4" appearance="hint">
        Quick Pin
      </Text>
      <Divider style={globalStyles.my8} />
      <NotedCardList />
    </Layout>
  );
};
