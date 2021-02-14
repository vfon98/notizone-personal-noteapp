import { Button, Layout, Icon, Card, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { styles } from "../HomeScreenStyles";
import { ModalAddCard } from "./ModalAddCard";
import { NotedCard } from "./NotedCard";

interface Props {}

export const NotedCardList = (props: Props) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const cards = useState<any[]>([1, 2, 3]);
  const pulseIconRef: any = React.useRef();

  return (
    <>
      <Layout style={styles.cardList}>
        {cards.map((card: any) => (
          <NotedCard key={card} />
        ))}
      </Layout>

      <Layout style={styles.cardList}>
        <Button
          appearance="outline"
          status="warning"
          onPress={() => {
            pulseIconRef.current.startAnimation();
            setShouldShowModal(!shouldShowModal);
          }}
          accessoryLeft={(props) => (
            <Icon {...props} ref={pulseIconRef} name="plus" animation="pulse" />
          )}
          style={styles.cardButtonAdd}
        ></Button>
        <ModalAddCard
          visible={shouldShowModal}
          onBackdropPress={() => setShouldShowModal(false)}
        />
      </Layout>
    </>
  );
};
