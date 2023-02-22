import React, { useEffect, useState } from 'react'
import { Clock } from '../../components/Clock'
import styled from 'styled-components'
import DocketList from '../../components/DocketList'
import Alert from '../../components/Alert'

// load todos into state from localStorage
const getTodosOnRefresh = () => {
  let localTodos = localStorage.getItem('todos')
  if (localTodos) {
    return JSON.parse(localStorage.getItem('todos'))
  } else {
    return []
  }
}

const Dockets = () => {
  const [entry, setEntry] = useState()
  const [todos, setTodos] = useState(getTodosOnRefresh())

  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const handleTodoSubmit = (e) => {
    e.preventDefault()

    // alert(`todo submitted: ${entries} `)
    if (!entry) {
      // setAlert({ show: true, msg: 'Please enter details!', type: 'danger' })
      // return show alert
      showAlert(true, 'danger', 'Please enter details')
    } else if (entry && isEditing) {
      // deal with edit
      // check if todo to be edited matches with edit ID of the editTodo function
      const editTodo = todos.map((todo) => {
        if (todo.id === editID) {
          return { ...todo, title: entry }
        }
        return todo
      })

      // if true set new changes from edit
      setTodos(editTodo)
      setEntry('')
      setIsEditing(false)
      showAlert(true, 'success', 'item edited')
    } else {
      showAlert(true, 'success', 'item added to docket!')
      const newEntry = { id: new Date().getTime().toString(), title: entry }
      setTodos([...todos, newEntry])
      setEntry('')
    }
  }

  // show state conditionals
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  // clear items conditional
  const clearTodos = () => {
    showAlert(true, 'success', "You've deleted everything!")
    setTodos([])
  }

  // remove item by ID
  const removeTodo = (id) => {
    showAlert(true, 'danger', 'item removed')
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodos = (id) => {
    const specificTodo = todos.find((todo) => todo.id === id)
    setIsEditing(true)
    setEditID(id)
    setEntry(specificTodo.title)
  }

  // console.log(todos)

  // store todos to localStorage and watch changes to todo list
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Docket className='docket'>
      <div className='clock__profile'>
        <Clock />
      </div>
      <div className='docket'>
        <h4>Docket List</h4>
        {alert.show && (
          <Alert {...alert} alertTimeout={showAlert} todos={todos} />
        )}
        <form action='' className='todo__form' onSubmit={handleTodoSubmit}>
          <input
            type='text'
            className='todo__input'
            placeholder='What needs to be done?'
            onChange={(e) => setEntry(e.target.value)}
            value={entry}
          />
          <button type='submit' className='todo__button'>
            {isEditing ? 'edit' : 'add'}
          </button>
        </form>
        {todos.length > 0 && (
          <div className='todo__container'>
            <DocketList
              items={todos}
              removeTodo={removeTodo}
              editTodos={editTodos}
            />
            <button className='clear__dockets' onClick={clearTodos}>
              clear docket!
            </button>
          </div>
        )}
      </div>
    </Docket>
  )
}

export default Dockets

const Docket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* height: 80vh; */

  .clock__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .clear__dockets {
    background-color: transparent;
    border: none;
    padding: 10px 5px;
    border-radius: 10px;
    color: red;
    white-space: pre-wrap;
    box-shadow: 5px -5px 8px #181818, -5px 5px 8px #202020;
    transition: 0.2s ease-in-out;
    width: 100%;
    padding: 0.8rem;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem auto;
    text-transform: capitalize;
    cursor: pointer;
  }

  .docket {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95vw;
    margin: 0 auto;
    max-width: 35rem;

    h4 {
      margin-bottom: 1rem;
      text-align: left;
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
      color: #646cff;
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .todo__form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 1rem auto;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      .todo__input {
        background-color: transparent;
        border: 1px solid rgb(63, 63, 63);
        border-radius: 10px;
        color: rgb(241, 236, 236);
        white-space: pre-wrap;
        border: none;
        box-shadow: 5px -5px 8px #181818, -5px 5px 8px #202020;
        transition: 0.2s ease-in-out;
        height: 100%;
        width: 80%;
        padding: 0.8rem;
        outline: none;
        font-size: 1rem;
        font-weight: 500;

        &:focus {
          border: 1px solid rgb(150, 150, 150);
        }
      }

      .todo__button {
        margin-left: 0.5rem;
        padding: 0.8rem 1.2rem;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
        font-weight: 500;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        text-transform: capitalize;
        transition: 0.2s ease-in-out;
        width: 20%;

        &:hover {
          background-color: #646cff;
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .todo__form {
      /* width: 80vw; */
    }
  }
`
