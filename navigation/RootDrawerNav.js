import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../src/screens/Home";
import MainScreen from "../src/screens/MainScreen";
import AnimalsScreen from "../src/screens/AnimalsScreen/index";
import BirdsScreen from "../src/screens/BirdsScreen/index";
import PlantsScreen from "../src/screens/PlantsScreen/index";
import RootStackNav from './RootStackNav';

const Drawer = createDrawerNavigator();

export default function RootDrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#EBD8B7",
          width: 220,
        },
        drawerLabelStyle:{
          fontSize:15,
          fontWeight: "bold",
          color:"#534340"
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My Home",
          headerStyle: {
            backgroundColor: "#2F5D62",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Menu"
        component={RootStackNav}
        options={{
          title: "Menu",
          headerStyle: {
            backgroundColor: "#2F5D62",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {/* <Drawer.Screen
        name="Animals"
        component={AnimalsScreen}
        options={{
          title: "My fav Animals",
          headerStyle: {
            backgroundColor: "#2F5D62",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      /> */}
      {/* <Drawer.Screen
        name="Birds"
        component={BirdsScreen}
        options={{
          title: "My fav Birds",
          headerStyle: {
            backgroundColor: "#2F5D62",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      /> */}
      {/* <Drawer.Screen
        name="Plants"
        component={PlantsScreen}
        options={{
          title: "My fav Plants",
          headerStyle: {
            backgroundColor: "#2F5D62",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
}