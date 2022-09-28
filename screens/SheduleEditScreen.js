import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import RadioButton from "../components/RadioButton";
import { useDispatch } from "react-redux";
import { editEmployeeShedule } from "../store/action/Employee-action";
import { useNavigation } from "@react-navigation/native";

const test = [
  {
    name: "On Leave",
    value: 0,
    selected: false,
  },
  {
    name: "9 AM to 11 AM",
    value: 1,
    selected: false,
  },
  {
    name: "1 PM to 2 PM",
    value: 2,
    selected: false,
  },
  {
    name: "3 PM to 5 PM",
    value: 3,
    selected: false,
  },
];

const SheduleEditScreen = ({ route }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { sheduleStatus, editbleId, sheduleDay } = route.params;
  const [value, setValue] = useState(sheduleStatus);
  const editedRadioArray = test.map((isLikedItem) =>
    isLikedItem.value === value
      ? { ...isLikedItem, selected: true }
      : { ...isLikedItem, selected: false }
  );

  const [RadioButtonData, setRadioButtonData] = useState(editedRadioArray);

  const onRadioBtnClick = (item) => {
    let updatedState = RadioButtonData.map((isLikedItem) =>
      isLikedItem.value === item.value
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setRadioButtonData(updatedState);
    setValue(item.value);
  };
  const saveHandler = async () => {
    await dispatch(editEmployeeShedule(editbleId, sheduleDay, value));
    navigation.navigate({
      name: "EmployeeShedule",
      params: { hearderName: "Edit Data", editbleId: editbleId },
    });
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.radioButtonContainer}>
        <Text style={styles.text}>Kindly Select the Slot</Text>
        {RadioButtonData.map((item) => (
          <RadioButton
            onPress={() => onRadioBtnClick(item)}
            selected={item.selected}
            key={item.value}
          >
            {item.name}
          </RadioButton>
        ))}
      </View>
      <Button title="Save" color={"black"} onPress={saveHandler} />
    </View>
  );
};

export const ScreenOptions = (navData) => {
  return {
    headerTitle: "Edit",
  };
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
  radioButtonContainer: {
    width: "94%",
    margin: "3%",
  },
});
export default SheduleEditScreen;
