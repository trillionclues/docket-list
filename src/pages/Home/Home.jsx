import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <Layout>
      <h1>Dockets</h1>
      <p>Increase your productivity with a simple docket app</p>
      <button>
        <NavLink to='/dockets'>Check it out....</NavLink>
      </button>
    </Layout>
  )
}

export default Home

const Layout = styled.div`
  max-width: 1280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  a {
    font-weight: 500;
    color: #fff;
    text-decoration: inherit;

    &:hover {
      color: #535bf2;
    }
  }

  p {
    color: white;
    font-size: 23px;
    width: 30vw;
    font-weight: 400;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    margin-bottom: 0;
    color: lightgrey;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1.2em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media screen and (max-width: 500px) {
    h1 {
      color: #646cff;
    }
    p {
      width: 90vw;
      text-align: center;
      /* color: #646cff; */
    }
  }
`
