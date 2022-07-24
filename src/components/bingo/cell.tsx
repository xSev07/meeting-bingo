import React from "react";

interface ICell {
    index: number,
    text: string,
    checked: boolean,
    onClick: Function,
}

export const Cell: React.FC<ICell> = React.memo((props) => {
    const {text, checked, index, onClick} = props;

    return (
        <button
            className={`bingo__cell ${checked && 'bingo__cell--active'}`}
            onClick={() => onClick(index)}
        >
            <p className='bingo__text'>{text}</p>
        </button>
    );
})