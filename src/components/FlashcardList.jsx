import Flashcard from './Flashcard';

function FlashcardList({ questions }) {
  return (
    <div className="flashcard-list">
      {questions.map((q) => (
        <Flashcard key={q.id} question={q} />
      ))}
    </div>
  )
}

export default FlashcardList;


