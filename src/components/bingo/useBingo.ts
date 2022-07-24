import {MATRIX_CENTER, MATRIX_SIZE, phrases} from "../../consts/common";
import {useEffect, useState} from "react";
import {getCoordinatesInMatrixByIndex, isMatrixCenter, prepareMatrix} from "../../utils/matrix";
import {replaceElementInArray} from "../../utils/common";

const defaultMatrix = prepareMatrix(phrases);

export const useBingo = () => {
    const [matrix, setMatrix] = useState(defaultMatrix);
    const [lastClick, setLastClick] = useState({x: MATRIX_CENTER, y: MATRIX_CENTER});
    const [isWin, setIsWin] = useState(false);

    const getCells = () => {
        return matrix.flat();
    };

    useEffect(() => {
        const {x, y} = lastClick;
        if (isMatrixCenter(x, y)) {
            return
        }

        setMatrix((prevState) => {
            const newValue = Object.assign({}, prevState[x][y], {checked: !prevState[x][y].checked});
            const newRow = replaceElementInArray(prevState[x], y, newValue);
            const newMatrix = replaceElementInArray(prevState, x, newRow);

            return newMatrix;
        });
    }, [lastClick]);

    useEffect(() => {
        const {x, y} = lastClick;
        // check diagonal
        if (x === y || x + y === MATRIX_SIZE - 1) {
            let win = true;

            for (let i = 0; i < MATRIX_SIZE; i++) {
                if (!matrix[i][x === y ? i : MATRIX_SIZE - 1 - i].checked) {
                    win = false;
                    break;
                }
            }

            if (win) setIsWin(true);
        } else if (matrix[x].every((it) => it.checked)) { // check rows
            setIsWin(true);
        } else if (matrix.every((it) => it[y].checked)) { // check columns
            setIsWin(true);
        }

    }, [matrix]);

    const cellClickHandler = (index: number): void => {
        const {x, y} = getCoordinatesInMatrixByIndex(index, MATRIX_SIZE);
        setLastClick({x, y});
    };

    return {
        isWin,
        cells: getCells(),
        cellClickHandler,
    }
}