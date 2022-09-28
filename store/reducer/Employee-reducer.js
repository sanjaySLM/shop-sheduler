import {
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE_SHEDULE,
  ADD_EMPLOYEE_DATA,
} from "../action/Employee-action";
import {
  PICKER_DATA,
} from "../../Data";

const initialState = {
  PickerData: PICKER_DATA,
  EmployeeData: [],
  EmployeeSheduleData: [],
};

export default (state = initialState, action) => {
  let copiedEmployeeSheduleData = [...state.EmployeeSheduleData];
  let copiedEmployeeData = [...state.EmployeeData];

  switch (action.type) {
    case EDIT_EMPLOYEE_SHEDULE:
      const check = state.EmployeeSheduleData.findIndex(
        (state) => state.id === action.editEmployeeShedule.id
      );
      copiedEmployeeSheduleData[check] = action.editEmployeeShedule;
      return {
        ...state,
        EmployeeSheduleData: copiedEmployeeSheduleData,
      };

    case ADD_EMPLOYEE_DATA:
      return {
        ...state,
        EmployeeData: state.EmployeeData.concat(action.addEmployeeData),
        EmployeeSheduleData: state.EmployeeSheduleData.concat(
          action.modifiedEmployeeSheduleDataData
        ),
      };

    case DELETE_EMPLOYEE:
      const updatedData = copiedEmployeeSheduleData.filter(
        (state) => state.id != action.deleteEmployeeId
      );
      const updatedEmplyeeData = copiedEmployeeData.filter(
        (state) => state.id != action.deleteEmployeeId
      );
      return {
        ...state,
        EmployeeData: updatedEmplyeeData,
        EmployeeSheduleData: updatedData,
      };
    default:
      return state;
  }
};
