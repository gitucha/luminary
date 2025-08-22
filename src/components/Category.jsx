import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
    {
        title: "Entertainment topics",
        items: ["Books", "Music", "Video games", "Film", "Television", "Board games"]
    },
    {
        title: "Science",
        items: ["Computers", "Nature", "Mathematics", "History", "Geography", "Gadgets"]
    },
    {
        title: "Others",
        items: ["Politics", "Sports", "Art", "Celebrities", "Animals", "Vehicles", "General Knowledge"]
    }
];

function Category() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState("")
    const difficulties = ['Easy', 'Medium', 'Hard'];

    function handleCategoryClick(item){
        setSelectedCategory(item)
        setSelectedDifficulty("")
    }

    function handleDifficultyChange(e){
        setSelectedDifficulty(e.target.value)
    }

    function startQuiz(){
        if(!selectedDifficulty){
            alert("please select a difficulty")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4">
            <div className="bg-purple-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl text-white font-bold mb-6 text-center" >Choose a category</h2>
                <div className="grid grid-cols-1 " >
                    {categories.map((category) => (
                        <div key={category.title} className="mb-6">
                            <h2 className="text-xl font-bold text-white mb-3">{category.title}</h2>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item) => (
                                    <button
                                        key={item}
                                        onClick={()=> handleCategoryClick(item)}
                                        className={`px-4 py-2 bg-black/40 rounded-full text-white font-semibold  hover:bg-black/60 hover:focus:outline-none focus:ring-4 focus:ring-black/70
                                        shadow-lg transition-transform duration-200 hover:scale-105 ${selectedCategory === item ? "bg-purple-600 text-white" :"bg-black/40 text-white hover:bg-black/60" } `}
                                    >
                                        {item}
                                    </button>

                                ))}
                            </div>
                        </div>

                    ))}
                </div>

                {/* Difficulty part */}
                {selectedCategory && (
                    <div className="mt-6">
                        <h3 className="text-white font-semibold mb-2">Selected:{selectedCategory}</h3>
                        <select 
                        value={selectedDifficulty}
                        onChange={handleDifficultyChange}
                        className="w-full p-2 rounded-lg bg-black/40 text-white focus:ring-2 focus:ring-purple-400"
                        > <option value="">Select Difficulty</option> 
                        {difficulties.map((level) =>( <option key={level} value={level} >{level}</option> ))}
                        </select>
                    </div>
                )}

                {/* start quiz button */}
                {selectedCategory && (
                    <Link to='/questioncard'>
                    <button 
                    onClick={startQuiz} 
                    className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition hover:scale-105" 
                    >Start quiz
                    </button>
                    </Link>
                    
                )}

            </div>
        </div>
    );
}

export default Category;