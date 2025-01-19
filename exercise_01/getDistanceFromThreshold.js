/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

/**
 * Calculates the distance from a given threshold.
 * @param {number} value - The current value.
 * @param {number} threshold - The threshold value to compare against.
 * @returns number - The difference between the threshold and the value.
 */
export const getDistanceFromThreshold = (value,threshold) => {
    if (typeof value !== 'number') {
        throw new TypeError(`expected number but received ${typeof value}`);
    }
    
    if (typeof threshold !== 'number') {
        throw new TypeError(`expected number but received ${typeof threshold}`);
    }

    return threshold - value;
};
