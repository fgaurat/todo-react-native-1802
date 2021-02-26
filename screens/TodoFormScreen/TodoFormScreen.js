import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import TodoForm from "../../components/TodoForm";

export default function TodoFormScreen({ navigation, route }) {
  const { form, dispatch } = route.params;
  return (
    
    <SafeAreaView>
      <TodoForm form={form} dispatch={dispatch} />
    </SafeAreaView>
  );
}
