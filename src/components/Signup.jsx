import React from 'react';

function Signup() {

  return (
    
    <div className="min-h-screen bg-purple-950 flex items-center justify-center p-4">
      <div className="bg-purple-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl text-white font-bold mb-2 text-center">Create new account</h2>
        <p className="text-purple-400 text-sm mb-8 text-center">fill in the details to create a new account</p>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full px-8 py-4 rounded-full bg-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-shadow duration-300"
              placeholder="Email"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
            >
              Create Account
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
          <p className="text-purple-400 mb-2">Already have an account?</p>
          <button className="w-full py-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;