import React from 'react';
import './bingo.css';
import {useBingo} from "./useBingo";

export const BingoField = () => {
    const {isWin, cells, cellClickHandler} = useBingo();
    return (
        <article className='bingo'>
            <div className='bingo__field bingo__field--animate'>
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
            {isWin &&
                <div className='bingo__win-wrapper'>
                    <div className='bingo__win'>
                        <p className='bingo__congrat-text'>You win!</p>
                    </div>
                </div>
            }
        </article>
    );
}