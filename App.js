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
import TodoForm from "./components/TodoForm/";
import TodoListScreen from "./screens/TodoListScreen/TodoListScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      console.log("LOAD_TODO")
      return { ...state,todos:action.payload};
      break;
      case "UPDATE_FORM":
        return { ...state,form:{...state.form,title:action.payload.title}};
        break;      
    default:
      return { ...state};
  }
};


const Stack = createStackNavigator();

export default function App() {

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    form: { title: "The title from the state" },
  });

  console.log(state.todos)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList Home" component={TodoListScreen} initialParams={{ dispatch:dispatch,todos:state.todos }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
  
//   const [state, dispatch] = useReducer(reducer, {
//     todos: [],
//     form: { title: "The title from the state" },
//   });

//   const onClickHello = () => {
//     Alert.alert("Click !");
//   };

//   return (
//     <SafeAreaView style={styles.cnt}>
//       <Text style={styles.header}>TodoList</Text>

//       <TodoForm form={state.form} dispatch={dispatch}/>
//       <TodoList todos={state.todos} dispatch={dispatch} />

//       {/* <Counter/>
//         <CounterReducer/> */}
//     </SafeAreaView>
//   );
// }

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
