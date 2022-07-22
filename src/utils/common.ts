export const replaceElementInArray = <T>(array: Array<T>, index: number, newValue: T): Array<T> => {
    return [...array.slice(0, index), newValue, ...array.slice(++index)]
}