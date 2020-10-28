import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Home, Boosts, Quests, Bonuses, Employees } from "../screens/index";
import BottomTabNavigator from "../components/navigation/BottomTabNavigator";
import MainMenu from "../components/navigation/MainMenu";
const tabsNavigation = createBottomTabNavigator(
  {
    Home,
    Boosts,
    Quests,
    Bonuses,
    Employees,
  },
  {
    initialRouteName: "Home",
    tabBarComponent: BottomTabNavigator,
    //     defaultNavigationOptions:({navigation}) =>({

    //     })
  }
);

const drawerNavigation = createDrawerNavigator(
  {
    tabsNavigation,
  },
  {
    initialRouteName: "tabsNavigation",
    contentComponent: MainMenu,
  }
);

const AppNavigation = createSwitchNavigator(
  {
    drawerNavigation,
  },
  {
    initialRouteName: "drawerNavigation",
  }
);

const AppContainer = createAppContainer(AppNavigation);

export { AppContainer };
