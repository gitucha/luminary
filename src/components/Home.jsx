import React from 'react'
import { doSignOut } from '../firebase/auth'
import Questioncard from './Questioncard'

function Home() {
  const handleLogout = async () => {
    try {
      await doSignOut()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-purple-950 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-4">Welcome to the Home Page</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-600"
      >
        Logout
      </button>
      {/* <Questioncard /> */}
    </div>
  )
}

export default Home