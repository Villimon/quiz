import React from 'react';


const Result = ({ questions, correct }) => {
    return (
        <div className="result">
            <div className="result__image" >
                <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/28824.png" alt="" />
            </div>
            <h2 className="result__title">Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href='/'>
                <button className="result__btn">Попробовать снова</button>
            </a>
        </div>
    );
}

export default Result;
