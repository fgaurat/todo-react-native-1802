import React,{useContect} from 'react';



export const TodoContext = React.createContext({
    todos:[],
    form:{},
    dispatch:() => {}
});