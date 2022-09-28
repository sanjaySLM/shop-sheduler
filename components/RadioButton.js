import React from "react";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";

const RadioButton = ({ onPress, selected, children }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    radioButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: '20%',
      marginVertical:'2%'
    },
    radioButton: {
      height: 20,
      width: 20,
      backgroundColor: "#F8F8F8",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
    radioButtonIcon: {
      height: 14,
      width: 14,
      borderRadius: 7,
      backgroundColor: "black",
    },
    radioButtonText: {
      fontSize: 20,
      marginLeft: 15,
    },
  });
export default RadioButton;
