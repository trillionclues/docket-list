import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEdit, FaTrash } from 'react-icons/fa'

// function ParentComponent() {
//   const [items, setItems] = useState([
//     { id: 1, title: 'Item 1', completed: false, stillActive: true },
//     { id: 2, title: 'Item 2', completed: false, stillActive: false },
//     { id: 3, title: 'Item 3', completed: true, stillActive: true },
//     { id: 4, title: 'Item 4', completed: false, stillActive: true }
//   ]);
//   const [completedTodo, setCompletedTodo] = useState([]);

//   const handleCheckboxChange = (id) => {
//     if (completedTodo.includes(id)) {
//       setCompletedTodo(completedTodo.filter((item) => item !== id));
//       setItems(
//         items.map((item) =>
//           item.id === id ? { ...item, completed: false } : item
//         )
//       );
//     } else {
//       setCompletedTodo([...completedTodo, id]);
//       setItems(
//         items.map((item) =>
//           item.id === id ? { ...item, completed: true } : item
//         )
//       );
//     }
//   };

//   const allItems = items;
//   const activeItems = items.filter((item) => item.stillActive);
//   const completedItems = items.filter((item) => item.completed);

//   const [activeTab, setActiveTab] = useState('All');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   let displayedItems;
//   if (activeTab === 'All') {
//     displayedItems = allItems;
//   } else if (activeTab === 'Active') {
//     displayedItems = activeItems;
//   } else {
//     displayedItems = completedItems;
//   }

//   return (
//     <div>
//       <TabLayout activeTab={activeTab} handleTabClick={handleTabClick} />
//       <div className="content">
//         {displayedItems.map((item) => {
//           const { id, title, completed } = item;
//           return (
//             <div key={id} className='todo__item'>
//               <label className='form-control'>
//                 <input
//                   type='checkbox'
//                   name='checkbox'
//                   checked={completedTodo.includes(item.id)}
//                   onChange={() => handleCheckboxChange(item.id)}
//                   className='todo__checkbox'
//                   id='checkInput'
//                 />
//               </label>
//               <p
//                 className='todo__text'
//                 style={{
//                   textDecoration: completed ? 'line-through' : 'none',
//                   color: completed ? 'grey' : '',
//                 }}
//               >
//                 {title}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function TabLayout(props) {
//   const { activeTab, handleTabClick } = props;

//   return (
//     <div>
//       <button
//         className={activeTab === 'All' ? 'active' : ''}
//         onClick={() => handleTabClick('All')}
//       >
//         All
//       </button>
//       <button
//         className={activeTab === 'Active' ? 'active' : ''}
//         onClick={() => handleTabClick('Active')}
//       >
//         Active
//       </button>
//       <button
//         className={activeTab === 'Completed' ? 'active' : ''}
//         onClick={() => handleTabClick

const DocketList = (props) => {
  const {
    items,
    removeTodo,
    editTodos,
    onCheckboxChange,
    activeTab,
    completedTodo,
    setCompletedTodo,
  } = props

  // console.log(items)

  const handleCheckboxChange = (id) => {
    const todoIndex = items.findIndex((item) => item.id === id)
    const updatedItems = [...items]
    updatedItems[todoIndex].completed = !updatedItems[todoIndex].completed

    if (updatedItems[todoIndex].completed) {
      setCompletedTodo([...completedTodo, updatedItems[todoIndex].id])
    } else {
      setCompletedTodo(completedTodo.filter((item) => item.id !== id))
    }
    onCheckboxChange(updatedItems)
  }

  const activeTodo = items.filter((item) => item.completed)
  // const completedTodos = completedTodo.filter((item) => item.completed)

  const completedTodos = completedTodo.filter((itemId) =>
    items.find((item) => item.id === itemId?.completed)
  )

  const todosToDisplay =
    activeTab === 1 ? activeTodo : activeTab === 2 ? completedTodos : items

  return (
    <List className='todo__list'>
      {todosToDisplay.map((item) => {
        const { id, title, completed, stillActive } = item
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
    /* color: red; */
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
      padding: 0 1rem 0 1rem;

      font-size: 1.2rem;
      align-items: center;
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
