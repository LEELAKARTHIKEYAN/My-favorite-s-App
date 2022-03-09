import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../src/screens/Home";
import AnimalsScreen from "../src/screens/AnimalsScreen/index.js";
// import BirdsScreen from "../src/screens/BirdsScreen/index.js";
// import PlantsScreen from "../src/screens/PlantsScreen/index.js";

const Drawer = createDrawerNavigator();

export default function RootDrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#000",
          width: 240,
        },
        drawerLabelStyle:{
          fontSize:18,
          color:"#fff"
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My Home",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Animals"
        component={AnimalsScreen}
        options={{
          title: "My fav Animals",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Birds"
        component={BirdsScreen}
        options={{
          title: "My fav Birds",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Plants"
        component={PlantsScreen}
        options={{
          title: "My fav Plants",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
}