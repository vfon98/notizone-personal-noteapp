import {
  Card,
  Icon,
  Input,
  Layout,
  Modal,
  Text,
  Button,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";

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
      style={styles.container}
    >
      <Layout style={[globalStyles.p16]}>
        <Input
          label="URL"
          caption="Please enter valid url"
          placeholder="Enter Page URL"
          captionIcon={(props) => (
            <Icon {...props} name="alert-circle-outline" />
          )}
        />
        <Input
          style={globalStyles.mt8}
          label="Description"
          placeholder="Enter Description"
        />

        <Button
          size="small"
          status="warning"
          appearance="outline"
          style={globalStyles.mt8}
        >
          Save
        </Button>
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
    minWidth: "60%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
