import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEdit, FaTrash } from 'react-icons/fa'

const DocketList = ({ items, removeTodo, editTodos, onCheckboxChange }) => {
  const [completedTodo, setCompletedTodo] = useState([])
  // console.log(items)

  const handleCheckboxChange = (id) => {
    if (completedTodo.includes(id)) {
      setCompletedTodo(completedTodo.filter((complete) => complete !== id))
    } else {
      setCompletedTodo([...completedTodo, id])
    }
    onCheckboxChange(id)
  }

  return (
    <List className='todo__list'>
      {items.map((item) => {
        const { id, title, completed } = item
        console.log(completed)
        console.log(title)
        return (
          <div key={id} className='todo__item'>
            <label className='form-control'>
              <input
                type='checkbox'
                name='checkbox'
                checked={completedTodo.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className='todo__checkbox'
                id='checkInput'
              />
            </label>
            <p
              className='todo__text'
              style={{
                textDecoration:
                  completedTodo.includes(item.id) === true
                    ? 'line-through'
                    : 'none',
                color: completedTodo.includes(item.id) ? 'grey' : '',
              }}
            >
              {title}
            </p>
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

    /* .todo__checkbox {
      width: 20px;
      height: 20px;
      border-radius: 100%;
    } */

    /* .custom__check {
      width: 20px;
      height: 20px;
      margin: 2px 0 2px 0;
      background: #fff;
      border-radius: 100%;
      position: relative;
      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    } */

    /* .custom__check label.inner {
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 100px;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      transition: all 0.5s ease;
      cursor: pointer;
      position: absolute;
      top: 2.125px;
      left: 2.125px;
      z-index: 1;
      background: #eee;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
    }

    label.outer {
      margin-left: 25px;
    } */

    input[type='checkbox'] {
      /* border-radius: 999;
      border: none;
      background-color: #fff;
      width: 20px;
      height: 20px;
      cursor: pointer; */
      display: grid;
      place-content: center;
    }

    input[type='checkbox']::before {
      content: '';
      width: 15px;
      height: 15px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em red;
      border-radius: 999;
    }

    input[type='checkbox']:checked::before {
      transform: scale(0.9);
    }

    /* input[type='checkbox']:checked + label.inner {
      background: green;
    } */

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
