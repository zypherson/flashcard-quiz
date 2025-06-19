/* eslint-disable no-unused-vars */
import questions from './data/questions';
import FlashcardList from './components/FlashcardList'
import { useState } from 'react';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="App">
      <h1>Flashcard Quiz</h1>

      {showResult ? (
        <div className="result">
          <h2>You scored {score} out of {questions.length}!</h2>
          <button onClick={restartQuiz}>Try Again</button>
        </div>
      ) : (
        <Flashcard question={currentQuestion} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App
