import EmployeeData from "../../Models/EmployeeData";
import EmployeeShedule from "../../Models/EmployeeShedule";

export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const EDIT_EMPLOYEE_SHEDULE = "EDIT_EMPLOYEE_SHEDULE";
export const ADD_EMPLOYEE_DATA = "ADD_EMPLOYEE_DATA";


export const deleteEmployeeData = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_EMPLOYEE,
      deleteEmployeeId: id,
    });
  };
};

export const editEmployeeShedule = (id, day, status) => {
  return (dispatch, getState) => {
    const editableData = getState().AddReducer.EmployeeSheduleData;
    let editableEmployeeData = editableData.find((item) => item.id === id);
    const updatedData = { ...editableEmployeeData, [day]: status };
    dispatch({
      type: EDIT_EMPLOYEE_SHEDULE,
      editEmployeeShedule: updatedData,
    });
  };
};

export const addEmployee = (name, pickerData) => {
  return (dispatch, getState) => {
    const val = Math.floor(1000 + Math.random() * 9000);
    let modifiedData = new EmployeeData(val, name, pickerData);
    let modifiedEmployeeSheduleDataData = new EmployeeShedule(
      val,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    );
    dispatch({
      type: ADD_EMPLOYEE_DATA,
      addEmployeeData: modifiedData,
      modifiedEmployeeSheduleDataData:modifiedEmployeeSheduleDataData
    });
  };
};
