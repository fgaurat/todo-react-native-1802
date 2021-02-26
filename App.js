import React, { useReducer,useEffect } from "react";
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
import TodoListScreen from "./screens/TodoListScreen/";
import TodoFormScreen from "./screens/TodoFormScreen/";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { loadTodos } from "./core/services";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { TodoContext } from "./core/context";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      return { ...state, todos: action.payload };
      break;
    case "UPDATE_FORM":
      return { ...state, form: { ...state.form, title: action.payload.title } };
      break;
    default:
      return { ...state };
  }
};


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    form: { title: "The title from the state" },
  });

  const todos = state.todos;
  const form = state.form;
  useEffect(() => {
    loadTodos(dispatch)
  }, [])

  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="TodoList Home">
    //     <Drawer.Screen
    //       name="TodoList Home"
    //       component={TodoListScreen}
    //       initialParams={{ dispatch, todos }}
    //     />
    //     <Drawer.Screen
    //       name="TodoList Form"
    //       component={TodoFormScreen}
    //       initialParams={{ dispatch, form }}
    //     />
    //   </Drawer.Navigator>


    // </NavigationContainer>

    <TodoContext.Provider value={{todos:state.todos,form:state.form,dispatch}}>
      <NavigationContainer>
        {todos.length > 0 && (
          <Tab.Navigator>
            <Tab.Screen
              name="TodoList Home"
              component={TodoListScreen}
              initialParams={{ dispatch, todos }}
            />
            <Tab.Screen
              name="TodoList Form"
              component={TodoFormScreen}
              initialParams={{ dispatch, form }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </TodoContext.Provider>
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
