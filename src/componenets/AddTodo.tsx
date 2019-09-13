import React from 'react';
import styled from '@emotion/styled'

const AddTodo: React.FC = () => {
    
  return (
    <div className="AddTodo">
        <Input />
        <Submit>submit</Submit>
    </div>
  );
}

const Input  = styled.input`

`

const Submit  = styled.button`

`
export default AddTodo;
