import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { globalStyles } from "../../styles/global";

interface Props {}

export const SettingScreen = (props: Props) => {
  return (
    <Layout style={[globalStyles.themeWrapper, globalStyles.flexCenter]}>
      <Text>Settings Screen</Text>
    </Layout>
  );
};
