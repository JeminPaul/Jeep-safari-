import React, { useState, useEffect } from 'react';

interface AnimatedWordProps {
  phrase: string[][];
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ phrase }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLetterIndex < phrase[currentPhraseIndex].length - 1) {
        setCurrentLetterIndex(prevIndex => prevIndex + 1);
      } else if (currentPhraseIndex < phrase.length - 1) {
        setCurrentPhraseIndex(prevIndex => prevIndex + 1);
        setCurrentLetterIndex(0);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentPhraseIndex, currentLetterIndex, phrase]);

  return (
    <div className="flex flex-col items-center"   >
      {phrase.map((line, lineIndex) => (
        <div key={lineIndex} className="flex">
          {line.map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`text-4xl font-bold ${
                lineIndex < currentPhraseIndex || (lineIndex === currentPhraseIndex && letterIndex <= currentLetterIndex)
                  ? 'opacity-100'
                  : 'opacity-0'
              } transition-opacity duration-200`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedWord;