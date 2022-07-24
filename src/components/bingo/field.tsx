import React from 'react';
import './bingo.scss';
import { Cell } from './cell';
import {useBingo} from "./useBingo";

export const BingoField = () => {
    const {isWin, cells, cellClickHandler} = useBingo();

    return (
        <article className='bingo'>
            <div className='bingo__field bingo__field--animate'>
                {cells.map(({text, checked}, index) => (
                    <Cell
                        key={index} // т.к. эти данные не изменяются, то можно использовать index
                        text={text}
                        checked={checked}
                        index={index}
                        onClick={cellClickHandler}
                    />
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