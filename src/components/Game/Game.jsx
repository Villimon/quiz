import React from 'react';

const Game = ({ question, onClickVariant, questions, step }) => {

    const percentage = Math.round(step / questions.length * 100)

    return (
        <div className="game">
            <div className="game__progress">
                <div style={percentage == 0 ? { width: '1%' } : { width: `${percentage}%` }} className="game__scale"></div>
            </div>
            <h1 className="game__title">{question.title}</h1>
            <ul className="game__list">
                {question.variants.map((variant, index) => <li
                    key={variant}
                    className="game__item"
                    onClick={() => onClickVariant(index)}
                >{variant}</li>)}
            </ul>
        </div>
    );
}

export default Game;
