import React, { useState } from 'react'
import { doSignInWithGoogle, doSignInWithEmailAndPassword } from '../firebase/auth'
import { useAuth } from '../context/index'
import { Link, Navigate } from 'react-router-dom'

function Login() {

  const {userLoggedIn} = useAuth()
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      try{
        await doSignInWithEmailAndPassword(email, password)
      } catch(error){
        console.error(error)
        setIsSigningIn(false)
      }
      
    }

  }

  const onGoogleSignIn = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      try{
        doSignInWithGoogle().catch()
      } catch(error){
        console.error(error)
        setIsSigningIn(false)
      }
      
    }

  }
  
  if(userLoggedIn){
    return <Navigate to='/home' replace />
  }

  return (
    <div>

      <div className="min-h-screen bg-purple-950 flex items-center justify-center p-4">

        <div className="bg-purple-800 rounded-2xl shadow-xl p-8 w-full max-w-md">

          <h2 className="text-3xl text-white font-bold mb-2 text-center">Welcome Back!</h2>
          <p className="text-purple-400 text-sm mb-8 text-center"></p>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="pt-4">

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
                disabled={isSigningIn}>
                {isSigningIn ? 'Signing in...' : 'Login'}
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

              className="w-full p-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
              onClick={onGoogleSignIn} >
              Continue with Google

            </button>

            <button
              className="w-full rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md">
              Continue with Meta
            </button>

          </div>

          <div className="mt-8 text-center">

            <p className="text-purple-400 mb-2">Don't have an account?<Link to='/signup' className='font-medium'>Sign In</Link>  </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login