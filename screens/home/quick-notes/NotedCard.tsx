import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native-elements";
import { styles } from "../HomeScreenStyles";

interface Props {}

export const NotedCard = (props: Props) => {
  const mockImageUri =
    "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/7ccb1640aad57dafd8b9743c68fac956";

  return (
    <Card status="warning" style={styles.cardItem}>
      <Text>Card</Text>
      <Image source={{ uri: mockImageUri }} style={{ minHeight: 100}} />
    </Card>
  );
};
