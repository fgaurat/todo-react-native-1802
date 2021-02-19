import React,{useEffect,useState} from 'react'
import { ScrollView, Text } from 'react-native'


export default function TodoList() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.13:3000/todos')
        .then(resp => resp.json())
        .then(todos => setTodos(todos))
    }, [])
    return (
        <ScrollView>
            {todos.map( todo => <Text key={todo.id}>{todo.title}</Text>)}
            
        </ScrollView>
    )
}
