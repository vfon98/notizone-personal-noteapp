import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigation } from "./navigation/AppNavigation";
import { Provider as MobXProvider } from "mobx-react";
import { QuickPinStore } from './stores'

export default function App() {
  return (
    <MobXProvider store={QuickPinStore}>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          <StatusBar style="inverted" animated />
          <AppNavigation />
        </ApplicationProvider>
      </SafeAreaProvider>
    </MobXProvider>
  );
}
