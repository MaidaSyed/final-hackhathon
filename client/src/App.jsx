import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ProjectForm from './components/ProjectForm'

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/home/:email' element={<Home />} />
    <Route path='/form/:userId' element={<ProjectForm />} />

    </Routes>
    </>
  )
}

export default App