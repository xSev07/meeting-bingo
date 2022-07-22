import {MATRIX_CENTER, MATRIX_SIZE, phrases} from "../../consts/common";
import {useEffect, useState} from "react";
import {getCoordinatesInMatrixByIndex, isMatrixCenter, prepareMatrix} from "../../utils/matrix";
import {replaceElementInArray} from "../../utils/common";

export const useBingo = () => {
    const [matrix, setMatrix] = useState(prepareMatrix(phrases));
    const [lastClick, setLastClick] = useState({x: MATRIX_CENTER, y: MATRIX_CENTER});

    const getCells = () => {
        return matrix.flat();
    };

    // const checkVertical = () => {
    //     for (let i = 0; i < ; i++) {
    //
    //     }
    // }

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
            console.log(1)
        }
        if (matrix[x].every((it) => it.checked)) alert('win'); // check rows
        if (matrix.every((it) => it[y].checked)) alert('win'); // check columns


    }, [matrix]);

    const cellClickHandler = (index: number): void => {
        const {x, y} = getCoordinatesInMatrixByIndex(index, MATRIX_SIZE);
        setLastClick({x, y});
    };

    return {
        cells: getCells(),
        cellClickHandler,
    }
}