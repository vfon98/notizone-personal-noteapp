import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Icon } from "@ui-kitten/components";
import { DetailScreen } from "../screens/details/DetailScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SettingScreen } from "../screens/settings/SettingScreen";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const Tab = createBottomTabNavigator();

interface Props {}

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab
      title="Home"
      icon={(props) => <Icon name="home" {...props} />}
    />
    <BottomNavigationTab
      title="Details"
      icon={(props) => <Icon name="info" {...props} />}
    />
    <BottomNavigationTab
      title="Settings"
      icon={(props) => <Icon name="settings" {...props} />}
    />
  </BottomNavigation>
);

export const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
