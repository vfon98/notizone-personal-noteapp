import { Button, Icon, Layout } from "@ui-kitten/components";
import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { QuickPinClass } from "../../../stores/quick-pin.store";
import { styles } from "../HomeScreenStyles";
import { ModalAddCard } from "./ModalAddCard";
import { NotedCard } from "./NotedCard";

interface Props {
  store: QuickPinClass
}

export const NotedCardList = inject('store')(observer((props: Props) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const cards = props.store.pinnedList;
  const pulseIconRef: any = React.useRef();

  console.log('props', props)

  return (
    <ScrollView>
      <Layout style={styles.cardList}>
        {cards.map((card: any) => (
          <NotedCard key={card} />
        ))}
      <Layout style={styles.cardItem}>
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
      </Layout>

    </ScrollView>
  );
}));
