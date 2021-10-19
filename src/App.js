import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'

const App=(props)=> {
  
      const { dispatch, visibleTodos } = props;
      
      return (
         <div>
            <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos}/>
         </div>
      )
   }

function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(App);