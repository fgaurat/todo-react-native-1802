import React, { useState, useReducer } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { reducer } from "./Counter.reducers";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0,reset:2 });
  return (
    <View>
      <Text style={styles.title}>CounterReducer</Text>
      <TextInput
      style={styles.resetValue}
        value={state.reset}
        placeholder="Reset value"
        accessibilityLabel="Reset value"
        keyboardType="number-pad"
        onChangeText={(text) => dispatch({ type: "SET_RESET",payload:text})}
      />
      <View style={styles.container}>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: "INCREMENT" })}
        ></Button>
        <Text style={styles.counter}>{state.count}</Text>
        <Button
          title="Decrement"
          onPress={() => dispatch({ type: "DECREMENT" })}
        ></Button>
      </View>
      <Button
        title="Reset"
        onPress={() => dispatch({ type: "RESET"})}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  counter: {
    fontSize: 30,
  },
  container: {
    flexDirection: "row",
  },
  resetValue: {
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom:10
  },
});
