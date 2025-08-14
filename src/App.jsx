import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Questioncard from './components/Questioncard'
import Home from './components/Home'
import { useAuth } from './context/index'

function App() {
  const { userLoggedIn, loading } = useAuth()

  if (loading) return null

  return (
    <Routes>
      <Route path="/" element={userLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
      <Route path="/login" element={userLoggedIn ? <Navigate to="/home" replace /> : <Login />}  />
      <Route path="/signup" element={userLoggedIn ? <Navigate to="/home" replace /> : <Signup />} />
      <Route path="/home" element={userLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
      <Route path="/question" element={userLoggedIn ? <Questioncard /> : <Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App