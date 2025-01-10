/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

/**
 * Generates a rounded random number within a specified range.
 * @param {number} limitNumber - The upper limit for the random number range.
 * @returns A randomly generated whole number between 0 and the limit
 */
export const generateRandomNumberInRange = (limitNumber) => {
    if (typeof limitNumber !== 'number' || limitNumber <0){
        throw new TypeError(`expected number but received ${typeof limitNumber}`)
    }

    return Math.floor(Math.random() * limitNumber) + 1;
}
