import { Icon } from "@ui-kitten/components";
import React from "react";

interface Props {
  name: string;
}

export default function CommonIcon({ name }: Props, ...props: any) {
  return <Icon name={name} {...props} />;
}
