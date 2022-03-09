import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Animal1 from "../AnimalsScreen/animal1/index.js";
import Animal2 from "../AnimalsScreen/animal2/index.js";
import Animal3 from "../AnimalsScreen/animal3/index.js";

const Tab = createBottomTabNavigator();

export default function AnimalsScreen() {
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
        name="ANIMAL1"
        component={Animal1}
        options={{ headerShown: false,title:"1" }}
      />
      <Tab.Screen
        name="ANIMAL2"
        component={Animal2}
        options={{ headerShown: false,title:"2" }}
      />
      <Tab.Screen
        name="ANIMAL3"
        component={Animal3}
        options={{  headerShown: false,title:"3" }}
      />
    </Tab.Navigator>
  );
}