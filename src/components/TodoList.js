import React from 'react'
import Todo from './Todo.js';
 const TodoList=(props)=> {
    
        return (
            <ul>
                {props.todos.map(todo =>
                    <Todo key={todo.id} {...todo}/>
                )}
            </ul>
        );
    }
export default TodoList;