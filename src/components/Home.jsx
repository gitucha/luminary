import React from "react";
import { useAuth } from "../context";
import { Link } from "react-router-dom";

function Home() {
    
  const { userLoggedIn } = useAuth();

  
  if (!userLoggedIn) {

    return (

      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white flex flex-col items-center justify-center p-6">

        <h1 className="text-4xl font-bold mb-4">Welcome to Luminary</h1>

        <p className="text-lg text-purple-200 mb-6 text-center max-w-md">
          Please log in to start your quiz journey.
        </p>

        <Link
          to="/login"
          className="bg-purple-700 px-6 py-3 rounded-full hover:bg-purple-600 transition"
        >
          Log In
        </Link>

      </div>
    );
  }

     return (

       <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white flex flex-col items-center justify-center p-6">

        <h1 className="text-5xl font-extrabold mb-4">Welcome to Luminary</h1>

        <p className="text-lg text-purple-200 mb-6 text-center max-w-md">
         Step into the light of knowledge — challenge yourself with exciting quizzes, 
        discover new facts, and see how bright your mind can shine.
        </p>

       <div className="flex gap-4">
        
      <Link
        to="/category"
        className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full hover:scale-105 transition"
      >
        Start Quiz 
      </Link>
      <br />
      <Link
        to="/profile"
        className="backdrop-blur-lg bg-gradient-to-r from-stone-700/40 to-stone-800/40 px-6 py-3 rounded-full hover:scale-105 transition"
      >
        To Profile
      </Link>
      </div>

    </div>
  );
}

export default Home;