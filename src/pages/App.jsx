import './App.css'
import React from 'react'
import Home from './Home/Home'
import ErrorPage from './Error/Error'
import Dockets from './Dockets/Dockets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/dockets' exact element={<Dockets />} />
        <Route path='*' exact element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
