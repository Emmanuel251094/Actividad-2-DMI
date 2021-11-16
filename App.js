//Alumno:Andres Emmanuel Reyes Jines
//Matricula:140854

import React from "react";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import FirtsScreen from "./pages/firstsection";
import SecondScreen from "./pages/secondsection";
import ThirdScreen from "./pages/thirdsection";

const Tab = createBottomTabNavigator();





// 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          TabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "First") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-cicle-outline";
            } else if (route.name === "Second") {
              iconName = "ios-list";
            }else if(route.name === "Third"){
              iconName = "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Firts Section" component={FirtsScreen} />
        <Tab.Screen name="Second Section" component={SecondScreen} />
        <Tab.Screen name="Third Section" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
