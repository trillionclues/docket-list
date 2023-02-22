import React, { useEffect } from 'react'
import styled from 'styled-components'

const Alert = ({ type, msg, alertTimeout, todos }) => {
  useEffect(() => {
    const clearAlert = setTimeout(() => {
      alertTimeout()
    }, 2000)
    return () => clearTimeout(clearAlert)
  }, [todos])

  return <AlertAuth className={`alert alert-${type}`}>{msg}</AlertAuth>
}

export default Alert

const AlertAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  padding: 2px 0;
`
