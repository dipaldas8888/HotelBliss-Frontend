import React, { useState, useEffect } from "react";
import questionsData from "../data/questions";

export default function Quiz() {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [usedIds, setUsedIds] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    loadNextQuestion();
  }, []);

  const getRandomQuestion = () => {
    const available = questions.filter((q) => !usedIds.includes(q.id));
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  };

  const loadNextQuestion = () => {
    const next = getRandomQuestion();
    if (!next) {
      setQuizEnded(true);
      return;
    }
    setCurrentQuestion(next);
    setUsedIds([...usedIds, next.id]);
    setSelectedOption("");
    setFeedback("");
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    const correct = currentQuestion.correctAnswer === selectedOption;
    if (correct) setScore((prev) => prev + 1);
    setFeedback(
      correct
        ? "✅ Correct!"
        : `❌ Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`
    );
  };

  const handleRestart = () => {
    setUsedIds([]);
    setScore(0);
    setQuizEnded(false);
    loadNextQuestion();
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      {!quizEnded && currentQuestion ? (
        <>
          <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            disabled={!!feedback}
          >
            Submit Answer
          </button>
          {feedback && (
            <>
              <p className="mt-4 font-medium">{feedback}</p>
              <button
                onClick={loadNextQuestion}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
              >
                Next Question
              </button>
            </>
          )}
          <p className="mt-4 text-gray-600">Score: {score}</p>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Quiz Complete!</h2>
          <p>
            Your score: {score} / {questions.length}
          </p>
          <button
            onClick={handleRestart}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
