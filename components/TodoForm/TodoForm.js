import React,{useState} from "react";

import {StyleSheet, View, Text,Button,TextInput } from "react-native";

export default function TodoForm() {


    const [form, setForm] = useState({title:'The title'})
  return (
    <View>
      <TextInput
        style={styles.title}
        value={form.title}
        placeholder="Todo Title"
        accessibilityLabel="Todo title"
        keyboardType="default"
        onChangeText={(text) => setForm({title:text})}
      />
        <Button
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
  