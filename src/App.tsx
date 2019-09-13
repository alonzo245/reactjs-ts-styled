import React, { useState } from 'react';
import styled from '@emotion/styled'
import AddTodo from './componenets/AddTodo'
import Todo from './componenets/Todo'

const App: React.FC = () => {

  const [todo, setTodos] = useState(['aaa', 'bbb', 'ccc'])

  return (
    <div className="App">
      <AddTodo />
      <Todo todo={todo} />
    </div>
  );
}

export default App;
