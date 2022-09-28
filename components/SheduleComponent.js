import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SheduleComponent = (props) => {
  const navigation = useNavigation();
  const editHandler = () => {
    navigation.navigate({
      name: "SheduleEditScreen",
      params: {
        sheduleStatus: props.status,
        sheduleDay: props.day,
        editbleId: props.employeeID,
      },
    });
  };

  let modifiedStatus;
  if (props.status === 1) {
    modifiedStatus = "9 AM - 11 AM";
  } else if (props.status === 2) {
    modifiedStatus = "12 PM - 2 PM";
  } else if (props.status === 3) {
    modifiedStatus = "3 PM - 5 PM";
  } else if (props.status === 0) {
    modifiedStatus = "On Leave";
  }

  return (
    <View style={styles.dataContainer}>
      <View style={styles.listContainer}>
        <View style={styles.titleText}>
          <Text style={styles.text}>{props.day.toUpperCase()}</Text>
        </View>
        <View style={styles.statusText}>
          <Text style={styles.text}>{modifiedStatus}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5
          name="user-edit"
          size={40}
          color="black"
          onPress={() => {
            editHandler();
          }}
        />
      </View>
      {/* <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="delete" size={50} color="black" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: "1%",
    flexDirection: "row",
    padding: "1.5%",
  },
  dataContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: "1%",
    padding: "1.5%",
    flexDirection: "row",
  },
  iconContainer: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    width: "80%",
    marginHorizontal: "1%",
  },
  titleText: {
    width: "40%",
    justifyContent: "center",
  },
  statusText: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  noDataAvailableCointainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default SheduleComponent;
