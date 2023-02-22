import React from 'react'
import styled from 'styled-components'
import { FaEdit, FaTrash } from 'react-icons/fa'

const DocketList = ({ items, removeTodo, editTodos }) => {
  // console.log(items)
  return (
    <List className='todo__list'>
      {items.map((item) => {
        const { id, title } = item
        return (
          <div key={id} className='todo__item'>
            <input type='checkbox' className='todo__checkbox' />
            <p className='todo__text'>{title}</p>
            <div className='todo__icons'>
              <FaEdit className='todo__edit' onClick={() => editTodos(id)} />
              <FaTrash
                className='todo__delete'
                onClick={() => removeTodo(id)}
              />
            </div>
          </div>
        )
      })}
    </List>
  )
}

export default DocketList

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
  margin: 1rem auto;
  max-width: 35rem;
  height: 100%;
  /* overflow: scroll; */
  background-color: transparent;
  border: 1px solid rgb(63, 63, 63);
  border-radius: 10px;
  color: rgb(241, 236, 236);
  white-space: pre-wrap;
  border: none;
  box-shadow: 5px -5px 8px #181818, -5px 5px 8px #202020;
  transition: 0.2s ease-in-out;

  .todo__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    margin: 0.5rem auto;
    border-radius: 0.5rem;

    .todo__checkbox {
      width: 20px;
      height: 20px;
    }

    .todo__text {
      width: 100%;
      padding: 0 1rem;
      font-size: 1.2rem;
    }

    .todo__icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100%;
      padding: 0 1rem;
      font-size: 0.9rem;
      gap: 0.5rem;
      cursor: pointer;

      .todo__edit {
        color: #0f0;
      }

      .todo__delete {
        color: #f00;
      }
    }
  }
`
