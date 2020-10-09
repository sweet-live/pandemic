import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Home, Boosts } from "../screens/index";
import BottomTabNavigator from "../components/navigation/BottomTabNavigator";
const tabsNavigation = createBottomTabNavigator(
  {
    Home,
    Boosts,
  },
  {
    initialRouteName: "Home",
    tabBarComponent: BottomTabNavigator,
    //     defaultNavigationOptions:({navigation}) =>({

    //     })
  }
);

const AppNavigation = createSwitchNavigator(
  {
    tabsNavigation,
  },
  {
    initialRouteName: "tabsNavigation",
  }
);

const AppContainer = createAppContainer(AppNavigation);

export { AppContainer };
