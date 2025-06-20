import { useState } from 'react';

function Flashcard({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    if (selected) return;
    setSelected(option);
    onAnswer(option);
  };

  return (
    <div className="flashcard">
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option) => (
          <li
            key={option}
            onClick={() => handleClick(option)}
            style={{
              cursor: 'pointer',
              backgroundColor:
                selected === option
                  ? option === question.answer
                    ? 'lightgreen'
                    : 'salmon'
                  : '',
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Flashcard;
