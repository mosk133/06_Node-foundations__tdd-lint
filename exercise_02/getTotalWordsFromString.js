/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

/**
 * Counts the total number of words in a given string.
 * @param {string} sentence - The input string to analyze.
 * @returns number - The total number of words in the string.
 */
export const getTotalWordsFromString = (sentence) => {
    if (typeof sentence !== 'string'){
        throw new TypeError (`expected string but received ${typeof sentence}`);
    }

    return sentence.split(" ").length;
};
