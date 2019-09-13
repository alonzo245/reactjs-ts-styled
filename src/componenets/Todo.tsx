import React from 'react';
import styled from '@emotion/styled'

interface TodoProps {
    todo: string[]
}

const Todo: React.FunctionComponent<TodoProps> = ({ todo }) => {
    return (
        <TodoWrapper>
            {todo.map(item => {
                return <TodoCard>{item}</TodoCard>
            })}
        </TodoWrapper>
    );
}

const TodoWrapper = styled.div`
color: white;
display: flex;
flex-direction: row;
justify-content: center;
`
//  flex-direction: row | row-reverse | column | column-reverse;
//   flex-wrap: nowrap | wrap | wrap-reverse;
//  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
//  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
//   align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;


const TodoCard = styled.div`
color: white;
border: solid white 1px;
margin: 0 10px

`
export default Todo;
