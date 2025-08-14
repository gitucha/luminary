import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'
import { useAuth } from '../context'

function Signup() {
  const { userLoggedIn } = useAuth()
  // const navigate = useNavigate()

  const [isSigningUp, setIsSigningUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!isSigningUp) {
      setIsSigningUp(true)
      try {
        await doCreateUserWithEmailAndPassword(email, password)
        // navigate('/home')
      } catch (err) {
        setError(err.message)
        setIsSigningUp(false)
      }
    }
  }

  const onGoogleSignUp = async (e) => {
    e.preventDefault()
    if (!isSigningUp) {
      setIsSigningUp(true)
      try {
        await doSignInWithGoogle()
        // navigate('/home')
      } catch (err) {
        setError(err.message)
        setIsSigningUp(false)
      }
    }
  }

  if (userLoggedIn) {
    return <Navigate to="/home" replace />
  }

  return (
    <div className="min-h-screen bg-purple-950 flex items-center justify-center p-4">
      <div className="bg-purple-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl text-white font-bold mb-2 text-center">Create new account</h2>
        <p className="text-purple-400 text-sm mb-8 text-center">Fill in the details to create a new account</p>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={onSubmit}>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Password"
              required
            />
          </div>


          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Confirm Password"
              required
            />
          </div>



          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
              disabled={isSigningUp}
            >
              {isSigningUp ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center my-8">
          <hr className="w-full border-purple-600" />
          <span className="mx-4 text-purple-400 font-medium">OR</span>
          <hr className="w-full border-purple-600" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={onGoogleSignUp}
            className="w-full p-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
            disabled={isSigningUp}
          >
            Continue with Google
          </button>

          <button
            className="w-full rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
          >
            Continue with Meta
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-purple-400 mb-4">Already have an account?</p>

          <Link className="w-full py-3 px-8 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
            to='/login'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup