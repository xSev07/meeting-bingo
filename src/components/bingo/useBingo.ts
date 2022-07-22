const getCoordinatesInMatrixByIndex = (index: number, size: number): {x: number, y: number} => {
    const x = Math.floor(index / size);
    const y = index % size;

    return {x, y};
}

export const useBingo = () => {
    const cells = new Array<string>();
    for (let i = 0; i < 25; i++) {
        cells.push(`${i}`)
    }

    const cellClickHandler = (index: number): void => {
        const {x, y} = getCoordinatesInMatrixByIndex(index, 5);
    };

    return {
        cells,
        cellClickHandler,
    }
}