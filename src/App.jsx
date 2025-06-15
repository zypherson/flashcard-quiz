/* eslint-disable no-unused-vars */
import {questions} from'./data/questions'
import FlashcardList from './components/FlashcardList'


function App() {
  return (
    <div className="App">
      <h1>Flashcard Quiz</h1>
      <FlashcardList questions={questions} />
    </div>
  );
}

export default App
