import Picker from "./Models/Picker";
import EmployeeShedule from "./Models/EmployeeShedule";
import EmployeeData from "./Models/EmployeeData";


export const PICKER_DATA = [
  new Picker(0, "Male", false),
  new Picker(1, "Female", false),
  new Picker(2, "Others", false),
];

export const EMPLOYEE_DATA = [
  new EmployeeData("A1", "Sanjay", "Male"),
  new EmployeeData("A2", "Mujib", "Male"),
  new EmployeeData("A3", "Sathesh", "Male"),
  new EmployeeData("A4", "Praveen", "Male"),
  new EmployeeData("A5", "Santhosh", "Male"),
  new EmployeeData("A6", "Jeenath", "Male"),
];

export const EMPLOYEE_SHEDULE = [
  new EmployeeShedule("A1", 1, 2, 3, 1, 2, 3, 2),
  new EmployeeShedule("A2", 1, 2, 3, 1, 2, 3, 2),
  new EmployeeShedule("A3", 1, 2, 3, 1, 2, 3, 2),
  new EmployeeShedule("A4", 1, 2, 3, 1, 2, 3, 2),
  new EmployeeShedule("A5", 1, 2, 3, 1, 2, 3, 2),
  new EmployeeShedule("A6", 1, 2, 3, 1, 2, 3, 2),
];
