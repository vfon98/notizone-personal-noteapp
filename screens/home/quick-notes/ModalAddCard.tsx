import { Card, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  visible: boolean;
  onBackdropPress: () => void;
}

export const ModalAddCard = ({ visible, onBackdropPress }: Props) => {
  return (
    <Modal
      visible={visible}
      onBackdropPress={onBackdropPress}
      backdropStyle={styles.backdrop}
    >
      <Card disabled>
        <Text>Blala</Text>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
