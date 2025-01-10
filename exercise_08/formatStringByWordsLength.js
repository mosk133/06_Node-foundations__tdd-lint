/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
 * - if total number of words is greater than 5, then return uppercase string
 * - otherwise, return lowercase string
 * input: string (sentence)
 * output: string
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

/**
 * Formats the sentence based on the number of words it contains.
 * @param {string} sentence - The input sentence.
 * @returns string - The original sentence or the uppercase version.
 */
export const formatStringByWordsLength = (sentence) => {
    if (typeof sentence !== 'string'){
        throw new TypeError(`expected string but received ${typeof sentence}`);
    }

    if (sentence.split(" ").length > 5){
        return sentence.toUpperCase();
    }
    return sentence.toLowerCase();
};
