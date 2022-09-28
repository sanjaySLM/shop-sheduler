import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen ,{ScreenOptions as ListScreenOptions } from "../screens/ListScreen";
import SheduleListScreen ,{ScreenOptions as SheduleListScreenOptions }from "../screens/SheduleListScreen";
import SheduleEditScreen  ,{ScreenOptions as SheduleEditScreenOptions } from "../screens/SheduleEditScreen";
import EmployeeaddScreen ,{ScreenOptions as EmployeeaddScreenOptions } from "../screens/EmployeeaddScreen";
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator options={{headerShown:false}}>
      <Stack.Screen name="List" component={ListScreen} options={ListScreenOptions}  />
      <Stack.Screen name="EmployeeShedule" component={SheduleListScreen} options={SheduleListScreenOptions}/>
      <Stack.Screen name="SheduleEditScreen" component={SheduleEditScreen} options={SheduleEditScreenOptions}/>
      <Stack.Screen name="EmployeeaddScreen" component={EmployeeaddScreen} options={EmployeeaddScreenOptions}/>
    </Stack.Navigator>
  );
};

const MainNaviator = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default MainNaviator;
