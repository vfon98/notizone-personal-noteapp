import { Card, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { globalStyles } from "../../../styles/global";
import { styles } from "../HomeScreenStyles";

interface Props {}

export const NotedCard = (props: Props) => {
  const mockImageUri =
    "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/7ccb1640aad57dafd8b9743c68fac956";

  return (
    <Layout style={styles.cardItem} level="2">
      <Layout style={globalStyles.mx8}>
        <Image source={{ uri: mockImageUri }} style={{ minHeight: 100 }} />
        <Text category="label" style={styles.cardTitle}>
          Loading Title...
        </Text>
      </Layout>
      <Text appearance="hint" style={styles.cardDesc}>
        Loading Description...
      </Text>
      <Text appearance="hint" style={styles.cardInfo}>Loading Info...</Text>
    </Layout>
  );
};
