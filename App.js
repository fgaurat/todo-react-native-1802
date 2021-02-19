import React, { useReducer } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      return { ...state,todos:action.payload};
      break;
    default:
      return { ...state};
  }
};

export default function App() {
  
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    form: { title: "The title from the state" },
  });






  const onClickHello = () => {
    Alert.alert("Click !");
  };

  return (
    <SafeAreaView style={styles.cnt}>
      <Text style={styles.header}>TodoList</Text>

      <TodoForm />
      <TodoList todos={state.todos} dispatch={dispatch} />

      {/* <Counter/>
        <CounterReducer/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "lightblue",
    width: "100%",
  },
  cnt: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
