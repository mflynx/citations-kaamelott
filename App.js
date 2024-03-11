import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Game from "./screens/Game";
import GameEnd from "./screens/GameEnd";
import QuoteGenerator from "./screens/QuoteGenerator";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Kaamelott Kikaaditt">
          <Stack.Screen name="Kaamelott Kikaaditt" component={Home}></Stack.Screen>
          <Stack.Screen name="Game" component={Game}></Stack.Screen>
          <Stack.Screen name="GameEnd" component={GameEnd}></Stack.Screen>
          <Stack.Screen name="Répliques au hasard" component={QuoteGenerator} ></Stack.Screen>
        </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
