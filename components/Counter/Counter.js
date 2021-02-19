import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <View>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.container}>
        <Button title="Increment" onPress={() => setCount(count + 1)}></Button>
        <Text style={styles.counter}>{count}</Text>
        <Button title="Decrement" onPress={() => setCount(count - 1)}></Button>
      </View>
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
});
