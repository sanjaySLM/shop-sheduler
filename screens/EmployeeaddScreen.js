import React, { useReducer, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Picker from "../components/Picker";
import { AntDesign } from "@expo/vector-icons";
import { addEmployee } from "../store/action/Employee-action";

export const ADD_DATA = "ADD_DATA";
const formReducer = (state, action) => {
  switch (action.type) {
    case ADD_DATA:
      const updatedInputValue = {
        ...state.inputValues,
        [action.key]: action.value,
      };
      const updatedInputValidities = {
        ...state.inputValidities,
        [action.key]: action.isValid,
      };
      let updatedFormIsValid = true;
      for (const key in updatedInputValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedInputValidities[key];
      }
      return {
        ...state,
        inputValues: updatedInputValue,
        inputValidities: updatedInputValidities,
        formStateIsValid: updatedFormIsValid,
      };
  }
};

const EmployeeaddScreen = () => {
  const pickerData = useSelector((state) => state.AddReducer.PickerData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: null,
      pickerData: pickerData,
    },
    inputValidities: {
      name: false,
      pickerData: false,
    },
    formStateIsValid: false,
  });

  const textChangeHandler = (inputKey, text) => {
    let isValid = false;
    if (text.length > 0) {
      isValid = true;
    }
    dispatchFormState({
      type: "ADD_DATA",
      value:
        inputKey === "radioButtonData" ||
        inputKey === "checkboxData" ||
        inputKey === "pickerData"
          ? text
          : text.charAt(0).toUpperCase() + text.slice(1),
      isValid: isValid,
      key: inputKey,
    });
  };

  // Picker Functionality
  const [picker, setPicker] = useState(false);
  const onPickerBtnClick = (item) => {
    setPicker(false);
    let updatedState = formState.inputValues.pickerData.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    textChangeHandler("pickerData", updatedState);
  };

  const saveHandler = () => {
    if (formState.formStateIsValid) {
      dispatch(
        addEmployee(
          formState.inputValues.name,
          formState.inputValues.pickerData
        )
      );
      navigation.navigate("List");
    } else {
      Alert.alert("Sorry", "Don't send empty Values", [{ text: "OK" }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.boxCointainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Name :</Text>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                value={formState.inputValues.name}
                autoCapitalize={"words"}
                onChangeText={textChangeHandler.bind(this, "name")}
              />
            </View>
          </View>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              margin: "3%",
              alignItems: "center",
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Gender :</Text>
            </View>
            <View
              style={{
                borderColor: "black",
                borderBottomWidth: 1,
                width: "70%",
                paddingHorizontal: "2.5%",
                marginLeft: "3%",
                paddingBottom: "1.5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 25 }}>
                  {formState.inputValues.pickerData.find(
                    (element) => element.selected === true
                  )
                    ? formState.inputValues.pickerData.find(
                        (element) => element.selected === true
                      ).value
                    : "--select--"}
                </Text>
                {picker ? (
                  <AntDesign
                    name="up"
                    size={27}
                    color="black"
                    onPress={() => {
                      setPicker(!picker);
                    }}
                  />
                ) : (
                  <AntDesign
                    name="down"
                    size={27}
                    color="black"
                    onPress={() => {
                      setPicker(!picker);
                    }}
                  />
                )}
              </View>
              {picker && (
                <Picker
                  pickerData={formState.inputValues.pickerData}
                  onPress={onPickerBtnClick}
                />
              )}
            </View>
          </View>

          <View
            style={{
              width: "80%",
              marginHorizontal: "10%",
              marginVertical: "3%",
            }}
          >
            <Button title="Submit" color="black" onPress={saveHandler} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
  boxCointainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "2.5%",
    marginVertical: "3%",
    width: "95%",
  },
  textInput: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: "3%",
    marginHorizontal: "3%",
    fontSize: 25,
    paddingHorizontal: 5,
  },
  textContainer: {
    width: "25%",
    alignItems: "center",
  },
  textInputContainer: {
    width: "75%",
  },
});

export const ScreenOptions = (navData) => {
  return {
    headerTitle: "Add-Employee",
  };
};
export default EmployeeaddScreen;
