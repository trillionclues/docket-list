import React, { useState } from 'react'
import styled from 'styled-components'

const ToggleCompleted = (props) => {
  const { activeTab, handleTabClick } = props

  return (
    <>
      <Toggle>
        <div className='task__tabs'>
          <ul>
            {['Active', 'Completed'].map((tab, index) => {
              return (
                <button
                  key={index}
                  className={activeTab === index ? 'active' : ''}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </button>
              )
            })}
          </ul>
        </div>
      </Toggle>
      <div className='content'>
        {/* {activeTab === 0 && <p>Todos for tab 1</p>}
        {activeTab === 1 && <p>Todos for tab 2</p>}
        {activeTab === 2 && <p>Todos for tab 3</p>} */}
      </div>
    </>
  )
}

export default ToggleCompleted

const Toggle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  .task__tabs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      button {
        background-color: transparent;
        border: none;
        padding: 10px 5px;
        border-radius: 10px;
        color: rgb(241, 236, 236);
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
        /* &:hover {
          background-color: #646cff;
        } */

        &.active {
          background-color: #646cff;
        }
      }
    }
  }
`
