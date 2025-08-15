import React from 'react'
import { Link } from 'react-router-dom'

const EndOfQuiz = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4"> Quiz Complete!</h1>
      <p className="text-lg mb-6">You've finished the quiz. Well done!</p>
      
      <div className="flex gap-4">
        <Link 
          to="/"
          className="px-6 py-3 bg-purple-700 rounded-full hover:bg-purple-600 transition"
        >
          Back to Home
        </Link>
        <Link 
          to="/category"
          className="px-6 py-3 bg-purple-700 rounded-full hover:bg-purple-600 transition"
        >
          Try Another Quiz
        </Link>
      </div>
    </div>
  )
}

export default EndOfQuiz