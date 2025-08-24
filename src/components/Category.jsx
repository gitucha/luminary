import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        title: "Entertainment topics",
        items: [
            { name: "Books", id: 10 },
            { name: "Music", id: 12 },
            { name: "Video games", id: 15 },
            { name: "Film", id: 11 },
            { name: "Television", id: 14 },
            { name: "Board games", id: 16 },
        ],
    },
    {
        title: "Science",
        items: [
            { name: "Computers", id: 18 },
            { name: "Nature", id: 17 },
            { name: "Mathematics", id: 19 },
            { name: "History", id: 23 },
            { name: "Geography", id: 22 },
            { name: "Gadgets", id: 30 },
        ],
    },
    {
        title: "Others",
        items: [
            { name: "Politics", id: 24 },
            { name: "Sports", id: 21 },
            { name: "Art", id: 25 },
            { name: "Celebrities", id: 26 },
            { name: "Animals", id: 27 },
            { name: "Vehicles", id: 28 },
            { name: "General Knowledge", id: 9 },
        ],
    },
];

function Category() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [amount, setAmount] = useState(10);
    const navigate = useNavigate();

    const difficulties = ["Easy", "Medium", "Hard"];

    const handleCategoryClick = (item) => {
        setSelectedCategory(item);
        setSelectedDifficulty("");
    };

    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };

    const fetchQuestions = async () => {
        if (!selectedCategory || !selectedDifficulty) return;

        const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory.id}&difficulty=${selectedDifficulty.toLowerCase()}`;

        try {
            const res = await fetch(apiUrl);
            const data = await res.json();

            // Navigate to Questioncard and pass questions via state and index when start quiz button is clicked
            navigate("/questioncard", { state: { questions: data.results } });

        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4">

            <div className="bg-purple-800 rounded-3xl shadow-xl p-8 pb-32 w-full max-w-md">

                <h2 className="text-3xl text-white font-bold mb-6 text-center">
                    Choose a category
                </h2>

                {/* Category Buttons */}

                <div className="grid grid-cols-1">

                    {categories.map((category) => (
                        <div key={category.title} className="mb-6">

                            <h2 className="text-xl font-bold text-white mb-3">
                                {category.title}
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {category.items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleCategoryClick(item)}
                                        className={`px-4 py-2 rounded-full font-semibold shadow-lg transition-transform duration-200 hover:scale-105 ${selectedCategory?.id === item.id
                                                ? "bg-purple-600 text-white"
                                                : "bg-black/40 text-white hover:bg-black/60"
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>

                {/* Difficulty part */}

                {selectedCategory && (

                    <div className="mt-6">
                        <h3 className="text-white font-semibold mb-2">
                            Selected: {selectedCategory.name}
                        </h3>

                        <select
                            value={selectedDifficulty}
                            onChange={handleDifficultyChange}
                            className="w-full p-2 rounded-lg bg-black/40 text-white focus:ring-2 focus:ring-purple-400"
                        >
                            <option value="">Select Difficulty</option>

                            {difficulties.map((level) => (
                                <option key={level} value={level}>
                                    {level}
                                </option>
                            ))}

                        </select>
                    </div>
                )}

                {/* Selecting question amount */}

                {selectedCategory && (
                    <div className="mt-4">
                        <label className="text-white font-semibold mb-2 block">
                            Number of Questions:
                        </label>

                        <input
                            type="number"
                            value={amount}
                            min="1"
                            max="50"
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-2 rounded-lg bg-black/40 text-white"
                        />

                    </div>
                )}

                {/* Start Quiz Button */}
                {selectedCategory && selectedDifficulty && (
                    <button
                        onClick={fetchQuestions}
                        className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition hover:scale-105"
                    >
                        Start Quiz
                    </button>
                )}
            </div>
        </div>
    );
}

export default Category;