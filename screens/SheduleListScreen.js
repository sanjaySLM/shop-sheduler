import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import SheduleComponent from "../components/SheduleComponent";

const SheduleListScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { editbleId } = route.params;
  const renderedData = useSelector((state) =>
    state.AddReducer.EmployeeSheduleData.find(
      (employee) => employee.id === editbleId
    )
  );
  const getEmployeeName = useSelector(
    (state) =>
      state.AddReducer.EmployeeData.find(
        (employee) => employee.id === editbleId
      ).name
  );



  return (
    <View>
      <View style={{marginHorizontal:'2%'}}>
        <Text style={{fontSize:20}}>This week {getEmployeeName}'s Shedule</Text>
      </View>
      <SheduleComponent day={"monday"} status={renderedData.monday} employeeID={editbleId} />
      <SheduleComponent day={"tuesday"} status={renderedData.tuesday} employeeID={editbleId}/>
      <SheduleComponent day={"wednesday"} status={renderedData.wednesday} employeeID={editbleId}/>
      <SheduleComponent day={"thursday"} status={renderedData.thursday} employeeID={editbleId}/>
      <SheduleComponent day={"friday"} status={renderedData.friday} employeeID={editbleId}/>
      <SheduleComponent day={"saturday"} status={renderedData.saturday} employeeID={editbleId}/>
      <SheduleComponent day={"sunday"} status={renderedData.sunday}  employeeID={editbleId}/>
    </View>
  );
};


export const ScreenOptions = () => {
  return {
    headerTitle: "Shedule",
  };
};


export default SheduleListScreen;
