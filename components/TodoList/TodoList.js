import React, { useEffect, useState } from "react";
import { StyleSheet,FlatList, ScrollView, Text, View, TouchableHighlight, Alert } from "react-native";
import { loadTodos } from "../../core/services";

const renderItem = ({ item:todo } ) => (
   <TouchableHighlight onPress={() => Alert.alert("Todo Info",todo.title)}>
    <Text style={styles.item}>{todo.title}</Text>
    </TouchableHighlight>
);



export default function TodoList({todos,dispatch}) {

  useEffect( () => loadTodos(dispatch),[])

  return (
    <FlatList
      data={todos}
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
  