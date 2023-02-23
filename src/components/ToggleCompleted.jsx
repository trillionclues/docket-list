import React from 'react'
import styled from 'styled-components'

const ToggleCompleted = () => {
  return (
    <Toggle>
      <div className='task__state'>
        <button className='completed'>Completed</button>
        <button className='uncompleted'>Uncompleted</button>
      </div>
    </Toggle>
  )
}

export default ToggleCompleted

const Toggle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  padding: 2px 0;
  gap: 0.2rem;

  .task__state {
    .completed,
    .uncompleted {
      background-color: transparent;
      border: none;
      border-radius: 10px;
      color: #fff;
      white-space: pre-wrap;
      box-shadow: 5px -5px 8px #181818, -5px 5px 8px #202020;
      transition: 0.2s ease-in-out;
      padding: 0.8rem;
      outline: none;
      cursor: pointer;
    }

    .uncompleted {
      background-color: #fff;
      color: #000;
    }
  }
`
