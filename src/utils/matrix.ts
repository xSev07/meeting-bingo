import {MATRIX_CENTER, MATRIX_SIZE} from "../consts/common";

interface ICell {
    text: string,
    checked: boolean,
}

export const getCoordinatesInMatrixByIndex = (index: number, size: number): { x: number, y: number } => {
    const x = Math.floor(index / size);
    const y = index % size;

    return {x, y};
}

export const isMatrixCenter = (x: number, y: number): boolean => {
    return x === MATRIX_CENTER && y === MATRIX_CENTER;
}

export const prepareMatrix = (values: Array<string>) => {
    const randomizedValues = values.slice().sort(() => Math.random() - 0.5);
    const res = new Array<Array<ICell>>();
    for (let i = 0; i < MATRIX_SIZE; i++) {
        let row = Array<ICell>();
        for (let j = 0; j < MATRIX_SIZE; j++) {
            if (isMatrixCenter(i, j)) {
                row.push({text: 'CONF CALL BINGO', checked: true});

            } else {
                row.push({text: randomizedValues.pop() || '', checked: false});
            }
        }
        res.push(row);
    }

    return res;
}