import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import TodoList from './components/TodoList';

export default function App() {

  const onClickHello = () =>{
    Alert.alert("Click !")
  }

  return (
    <SafeAreaView style={styles.cnt}>
      <Text style={styles.header}>TodoList</Text>
      
      <TodoList/>


        {/* <Counter/>
        <CounterReducer/> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    textAlign:'center',
    fontWeight:"bold",
    fontSize:24,
    backgroundColor: 'lightblue',
    width:"100%"
  },
  cnt: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
