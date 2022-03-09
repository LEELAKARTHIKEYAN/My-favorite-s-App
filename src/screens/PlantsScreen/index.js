import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Plant1 from '../PlantsScreen/plant1';
import Plant2 from '../PlantsScreen/plant2';
import Plant3 from '../PlantsScreen/plant3';

const Tab = createBottomTabNavigator();

export default function PlantsScreen() {
    const screenOptions = {
        tabBarStyle: {
          backgroundColor: "#B5CDA3",
          height: 70,
          borderRadius: 10,
          margin: 1,
        },
        tabBarItemStyle: {
          backgroundColor: "#fff",
          margin: 10,
          borderRadius:5,
        },
      };

  return (
    <Tab.Navigator
      {...{ screenOptions }}

      tabBarOptions={{
        activeTintColor: "#534340",
        inactiveTintColor: "#BB9981",
        labelStyle: { fontSize: 33 },
      }}
    >
      <Tab.Screen
        name="PLANT1"
        component={Plant1}
        options={{ headerShown: false, title:"1" }}
      />
      <Tab.Screen
        name="PLANT2"
        component={Plant2}
        options={{ headerShown: false, title:"2" }}
      />
      <Tab.Screen
        name="PLANT3"
        component={Plant3}
        options={{ headerShown: false, title:"3" }}
      />
    </Tab.Navigator>
  );
}