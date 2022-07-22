import {MATRIX_SIZE, phrases} from "../../consts/common";
import {useState} from "react";
import {getCoordinatesInMatrixByIndex, isMatrixCenter, prepareMatrix} from "../../utils/matrix";

export const useBingo = () => {
    const [matrix, setMatrix] = useState(prepareMatrix(phrases));

    const getCells = () => {
        return matrix.flat();
    };

    const cellClickHandler = (index: number): void => {
        const {x, y} = getCoordinatesInMatrixByIndex(index, MATRIX_SIZE);
        if (isMatrixCenter(x, y)) {
            return
        }

        setMatrix((prevState) => {
            const newValue = Object.assign({}, prevState[x][y], {checked: !prevState[x][y].checked});
            const newRow = [...prevState[x].slice(0, y), newValue, ...prevState[x].slice(y+1)];
            const newMatrix = [...prevState.slice(0, x), newRow, ...prevState.slice(x+1)];

            return newMatrix;
        })
    };

    return {
        cells: getCells(),
        cellClickHandler,
    }
}