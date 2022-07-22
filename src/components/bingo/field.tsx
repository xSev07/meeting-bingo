import React from 'react';
import './bingo.css';

export const BingoField = () => {
    const cells = new Array();
    for (let i = 0; i < 25; i++) {
        cells.push(i)
    }
    return (
        <article className='bingo'>
            <div className='bingo__field'>
                {cells.map((it) => (
                    <button className='bingo__cell'>
                        <p className='bingo__text'>{++it}</p>
                    </button>
                ))}
            </div>
        </article>
    );
}