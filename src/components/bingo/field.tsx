import React from 'react';
import './bingo.css';
import {useBingo} from "./useBingo";

export const BingoField = () => {
    const {cells, cellClickHandler} = useBingo();
    return (
        <article className='bingo'>
            <div className='bingo__field'>
                {cells.map((it, index) => (
                    <button
                        key={it}
                        className='bingo__cell'
                        onClick={() => cellClickHandler(index)}
                    >
                        <p className='bingo__text'>{it}</p>
                    </button>
                ))}
            </div>
        </article>
    );
}