import {MATRIX_CENTER, MATRIX_SIZE, phrases} from "../../consts/common";
import {useEffect, useState} from "react";
import {getCoordinatesInMatrixByIndex, isMatrixCenter, prepareMatrix} from "../../utils/matrix";
import {replaceElementInArray} from "../../utils/common";

export const useBingo = () => {
    const [matrix, setMatrix] = useState(prepareMatrix(phrases));
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
        }
        if (matrix[x].every((it) => it.checked)) setIsWin(true); // check rows
        if (matrix.every((it) => it[y].checked)) setIsWin(true); // check columns

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