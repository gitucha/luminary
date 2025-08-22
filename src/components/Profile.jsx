import React from "react";
import { useAuth } from "../context/index";
import { doSignOut } from "../firebase/auth";

function Profile() {
  const { currentUser } = useAuth();

  async function handleLogout() {
    try {
      await doSignOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 to-purple-800 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg p-8 text-center border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6">Your Profile</h2>

          <div>
              <img
                src={currentUser.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-md"
              />

            <p className="text-white text-lg font-medium">
              {currentUser.displayName || "Anonymous User"}
            </p>
            <p className="text-purple-300 mb-6">{currentUser.email}</p>
          </div>
       

        <button
          onClick={handleLogout}
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold hover:scale-105 transform transition shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;