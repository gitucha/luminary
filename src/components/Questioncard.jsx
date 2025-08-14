import React from 'react'

function Questioncard() {
    return (
   <div>
    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="bg-[#0f1a30] rounded-3xl p-6 w-[320px] relative">
        
        <div className="flex justify-between text-sm text-black">
          <span className="bg-purple-600 px-3 py-1 rounded-full">*1 of 10</span>
          <span className="bg-purple-600 px-3 py-1 rounded-full">*difficulty</span>
        </div>

        {/* Timer */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold shadow-lg">
          *20
        </div>

        {/* Question Box */}
        <div className="bg-purple-800 text-center text-white rounded-2xl p-6 mt-12">
          <p className="text-sm">Question 01</p>
          <p className="text-xs text-gray-300 mb-2">*category.quiz</p>
          <hr className="border-purple-500 my-2" />
          <p className="text-lg font-medium">*Question</p>
        </div>

        {/* Options */}
        <div className="mt-6 space-y-4">
          {["Option 1*", "Option 2*", "Option 3*", "Option 4*"].map((option, i) => (
            <button
              key={i}
              className="w-full bg-purple-800 text-white py-3 rounded-full hover:bg-purple-700 transition"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
   </div>
    )
}

export default Questioncard