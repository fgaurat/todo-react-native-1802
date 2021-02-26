import React,{useState} from "react";

import {StyleSheet, View, Text,Button,TextInput } from "react-native";
import { addTodo } from "../../core/services";
import { useNavigation } from '@react-navigation/native';



export default function TodoForm({form,dispatch}) {
    const navigation = useNavigation();

  return (
    <View>
      <TextInput
        style={styles.title}
        value={form.title}
        placeholder="Todo Title"
        accessibilityLabel="Todo title"
        keyboardType="default"
        onChangeText={(text) => dispatch({type:'UPDATE_FORM',payload:{title:text}})}
      />
        <Button onPress={ e => {
            addTodo(dispatch,form)
            navigation.goBack();
        } }
          title="Ajout"
        ></Button>

    </View>

  );
}

const styles = StyleSheet.create({
   
    title: {
      height: 40,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      marginBottom:10
    },
  });
  