/* eslint-disable no-unused-vars */
import questions from './data/questions';
import FlashcardList from './components/FlashcardList'
import { useState } from 'react';
import Flashcard from './components/Flashcard';
import { AnimatePresence } from 'framer-motion';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  
  const progress = ((currentIndex) / questions.length) * 100;


  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };
  const handleNext = () => {
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
      {!showResult && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {showResult ? (
        <div className="result">
          <h2>You scored {score} out of {questions.length}!</h2>
          <button onClick={restartQuiz}>Try Again</button>
        </div>
      ) : (
        <AnimatePresence mode="wait">
        {!showResult && (
          <Flashcard
            key={currentQuestion.id}  
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
            isLast={currentIndex + 1 === questions.length}
          />
        )}
      </AnimatePresence>
      )}
    </div>
  );
}

export default App
