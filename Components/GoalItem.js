import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextPropTypes,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem} onTouc>
        <Text>{props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default GoalItem;
