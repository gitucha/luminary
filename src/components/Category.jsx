import React from "react";

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
    return (
        <div className=" min-h-screen bg-purple-950 flex items-center justify-center p-4">
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
                                        className="px-4 py-2 bg-black/40 rounded-full text-white font-semibold  hover:bg-black/60 hover:focus:outline-none focus:ring-4 focus:ring-black/70
                                        shadow-lg transition-transform duration-200 hover:scale-105"
                                    >
                                        {item}
                                    </button>

                                ))}
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
}

export default Category;