import React from "react";
import { View, Text,Button, SafeAreaView } from "react-native";
import TodoList from "../../components/TodoList";

export default function TodoListScreen({ navigation, route }) {
  const { todos, dispatch } = route.params;
  console.log("TodoListScreen");

  return (
    <SafeAreaView>
      <TodoList todos={todos} dispatch={dispatch} />
    </SafeAreaView>
  );
}
