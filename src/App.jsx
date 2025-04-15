import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter",
  },
  {
    question:
      "Which programming language is primarily used for web development?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
    correctAnswer: "Oxygen",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1923", "1898"],
    correctAnswer: "1912",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "George Orwell",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2"],
    correctAnswer: "H2O",
  },
];

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowScore(false);
  };

  return (
    <div className="block m-3 p-1.5 item-center flex flex-col justify-center h-screen bg-gray-100">
      {!showScore ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-center">
            {questions[questionIndex].question}
          </h1>
          <ul className="space-y-2">
            {questions[questionIndex].options.map((option, index) => (
              <li key={index}>
                <button
                  className={`w-full p-2 rounded ${
                    selectedOption === option
                      ? option === questions[questionIndex].correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null} // Disable buttons after selection
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={handleNextQuestion}
            disabled={selectedOption === null} // Disable "Next Question" until an option is selected
          >
            Next Question
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Your score: {score} out of {questions.length}
          </h2>
          <button
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
