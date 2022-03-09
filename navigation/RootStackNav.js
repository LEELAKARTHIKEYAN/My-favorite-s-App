import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../src/screens/Home';
import MainScreen from '../src/screens/MainScreen';
import PlantsScreen from '../src/screens/PlantsScreen/index';
import AnimalsScreen from '../src/screens/AnimalsScreen/index';
import BirdsScreen from '../src/screens/BirdsScreen/index';

const Stack = createNativeStackNavigator();

export default function RootStackNav()
{
    return(
        <Stack.Navigator>
        <Stack.Screen name="HOME" component={HomeScreen}/>
        <Stack.Screen name="MENU" component={MainScreen}/>
        <Stack.Screen name="ANIMALS" component={AnimalsScreen}/>
        <Stack.Screen name="PLANTS" component={PlantsScreen}/>
        <Stack.Screen name="BIRDS" component={BirdsScreen}/>
        </Stack.Navigator>
    );
}
