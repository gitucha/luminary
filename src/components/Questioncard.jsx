import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Timer from "./Timer";

function Questioncard() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const difficulty = queryParams.get("difficulty");

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {

      const fetchQuestions = async () => {

      try {
        const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        const data = await res.json();
        setQuestions(data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();

  }, [category, difficulty]);



    if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

    if (!questions || questions.length === 0)
     return <div className="text-white text-center mt-10">No questions found</div>;

    const currentQuestion = questions[currentIndex];
    const correctAnswer = currentQuestion.correct_answer;
    const options = [
      ...currentQuestion.incorrect_answers,
      correctAnswer,
    ].sort(() => Math.random() - 0.5);


   const handleOptionClick = (option) => {
     if (isAnswered) return; // Prevents multiple answers just in case
      setSelectedOption(option);
      setIsAnswered(true);
    };

  
    const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIndex(currentIndex + 1);
  };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
         <div className="bg-[#0f1a30] rounded-3xl p-6 pb-32 w-full max-w-md relative text-white">

        {/* Header */}
        <div className="flex justify-between text-sm mb-6">
          <span className="bg-purple-600 px-3 py-1 rounded-full">
            {currentIndex + 1} of {questions.length}
          </span>
          <span className="bg-purple-600 px-3 py-1 rounded-full capitalize">
            {difficulty}
          </span>
        </div>

        {/* Timer */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-purple-900 rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold shadow-lg">
          <Timer />
        </div>

        {/* Questions */}
        <div className="bg-purple-800 text-center rounded-2xl p-6 mt-12">
          <p className="text-sm mb-1">Question {currentIndex + 1}</p>
          <p className="text-xs text-gray-300 mb-2">{currentQuestion.category}</p>
          <hr className="border-purple-500 my-2" />
          <p className="text-lg font-medium">{currentQuestion.question}</p>
        </div>

        {/* Options */}
        <div className="mt-6 space-y-4">
          
          {options.map((option, i) => {
            let buttonClass = "w-full py-3 rounded-full transition ";
            if (isAnswered) {
              if (option === correctAnswer) {
                buttonClass += "bg-green-600 text-white"; // Correct
              } else if (option === selectedOption) {
                buttonClass += "bg-red-600 text-white"; // Wrong selected
              } else {
                buttonClass += "bg-purple-800 text-gray-300"; // Neutral
              }
            } else {
              buttonClass += "bg-purple-800 text-white hover:bg-purple-700";
            }

            return (
              <button
                key={i}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={
              currentIndex < questions.length - 1
                ? handleNext
                : () => alert("Quiz Finished!")
            }
            className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition"
          >
            {currentIndex < questions.length - 1 ? "Next" : "Finish"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Questioncard;