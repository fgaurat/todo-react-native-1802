import React from 'react'
import { View, Text } from 'react-native'
import TodoList from '../../components/TodoList'

export default function TodoListScreen({ navigation, route }) {
    
    const {todos,dispatch} = route.params
    console.log('TodoListScreen',todos)
    return (
        <View>
            <TodoList todos={todos} dispatch={dispatch} />
        </View>
    )
}
