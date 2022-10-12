import React, { useState } from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import './styles/style.scss';

const questions = [
  {
    id: 1,
    title: 'Сколько будет 2 + 2 ?',
    variants: ['3', '4', '5'],
    correct: 1
  },
  {
    id: 2,
    title: 'Сколько будет 10 - 5 ?',
    variants: ['5', '60', '0'],
    correct: 0
  },
  {
    id: 3,
    title: 'Сколько будет 3 * 3 ?',
    variants: ['6', '3', '9'],
    correct: 2
  },
]



function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step]



  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="app">
      {
        step !== questions.length
          ? <Game
            question={question}
            onClickVariant={onClickVariant}
            questions={questions}
            step={step}
          />
          : <Result
            questions={questions}
            correct={correct}
          />
      }
    </div>
  );
}

export default App;
