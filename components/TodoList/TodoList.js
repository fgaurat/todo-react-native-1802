import React, { useContext } from "react";
import { StyleSheet,FlatList, ScrollView, Text, View, TouchableHighlight, Alert } from "react-native";
import { loadTodos } from "../../core/services";
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { TodoContext } from "../../core/context";

const renderItem = ({ item:todo } ) => (
   <TouchableHighlight onPress={() => Alert.alert("Todo Info",todo.title)}>
    <Text style={styles.item}>{todo.title}</Text>
    </TouchableHighlight>
);



export default function TodoList({todos,dispatch}) {
  const todoContext = useContext(TodoContext)
  return (
    <FlatList
      data={todoContext.todos}
      renderItem={renderItem}
      keyExtractor={(todo) => `${todo.id}`}
    />

  );
}


const styles = StyleSheet.create({
    item:{
        padding:10,
        marginBottom:5,
        fontSize:20,
        backgroundColor:'lightpink',
        marginHorizontal:10,
        marginTop:24, 
    }

  });
  