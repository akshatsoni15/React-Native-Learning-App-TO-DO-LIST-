// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goal) => {
    setIsAddMode(false);
    setGoals((goals) => [
      ...goals,
      { id: Math.random().toString(), value: goal },
    ]);
  };

  const removeGoalHandler = (keys) => {
    setGoals((goals) => {
      return goals.filter((goal) => goal.id !== keys);
    });
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add new goal"
        onPress={() => {
          setIsAddMode(true);
        }}
      />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        cancelGoal={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
