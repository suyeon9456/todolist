import React from 'react'
import styled from 'styled-components'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 40px;
  overflow-y: auto;
`

function TodoList () {
  return (
    <TodoListBlock>TOdoList</TodoListBlock>
  )
}

export default TodoList
