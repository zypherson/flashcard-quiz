import { useState } from 'react';
/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'

function Flashcard({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    if (selected) return;
    setSelected(option);
    onAnswer(option);
  };

  return (
    
    <motion.div
      className="flashcard"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
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
      </motion.div>
  );
}

export default Flashcard;
