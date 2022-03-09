import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Bird1 from '../BirdsScreen/bird1';
import Bird2 from '../BirdsScreen/bird2';
import Bird3 from '../BirdsScreen/bird3';

const Tab = createBottomTabNavigator();

export default function BirdsScreen() {
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
        name="BIRD1"
        component={Bird1}
        options={{ headerShown: false, title:"1" }}
      />
      <Tab.Screen
        name="BIRD2"
        component={Bird2}
        options={{ headerShown: false, title:"2" }}
      />
      <Tab.Screen
        name="BIRD3"
        component={Bird3}
        options={{ headerShown: false, title:"3" }}
      />
    </Tab.Navigator>
  );
}