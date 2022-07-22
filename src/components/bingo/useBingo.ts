import {MATRIX_SIZE, phrases} from "../../consts/common";

interface ICell {
    text: string,
    checked: boolean,
}

const getCoordinatesInMatrixByIndex = (index: number, size: number): {x: number, y: number} => {
    const x = Math.floor(index / size);
    const y = index % size;

    return {x, y};
}

const prepareMatrix = () => {
    const MATRIX_CENTER = Math.floor(MATRIX_SIZE / 2);
    const copyPhrases = phrases.slice().sort(() => Math.random() - 0.5);
    const res = new Array<Array<ICell>>();
    for (let i = 0; i < MATRIX_SIZE; i++) {
        let row = Array<ICell>();
        for (let j = 0; j < MATRIX_SIZE; j++) {
            if (i === MATRIX_CENTER && j === MATRIX_CENTER) {
                row.push({text: 'CONF CALL BINGO', checked: true});

            } else {
                row.push({text: copyPhrases.pop() || '', checked: false});
            }
        }
        res.push(row);
    }

    return res;
}

const getCells = () => {
    return prepareMatrix().flat();
};

export const useBingo = () => {
    const cellClickHandler = (index: number): void => {
        const {x, y} = getCoordinatesInMatrixByIndex(index, 5);
    };

    return {
        cells: getCells(),
        cellClickHandler,
    }
}