import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Picker = (props) => {
  return (
    <View>
      {props.pickerData.map((object, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              props.onPress(object);
            }}
          >
            <Text style={{ fontSize: 25 }}>{object.value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Picker;
