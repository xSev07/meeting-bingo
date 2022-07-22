import React from 'react';
import './bingo.css';
import {useBingo} from "./useBingo";

export const BingoField = () => {
    const {cells, cellClickHandler} = useBingo();
    return (
        <article className='bingo'>
            <div className='bingo__field'>
                {cells.map(({text, checked}, index) => (
                    <button
                        key={text}
                        className={`bingo__cell ${checked && 'bingo__cell--active'}`}
                        onClick={() => cellClickHandler(index)}
                    >
                        <p className='bingo__text'>{text}</p>
                    </button>
                ))}
            </div>
        </article>
    );
}