/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
 * - if array has elements, then return array as string, joined by '|' (pipe character)
 * - otherwise, return an empty string
 * input: array (collection)
 * output: string
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */

/**
 * Converts the input array to a string representation
 * @param {array} collection - The input array.
 * @returns string - A string representation of the array or an empty string if it's empty.
 */
export const transformCollectionToString = (collection) => {
    if (!Array.isArray(collection)) {
        throw new TypeError(`expected array but received ${typeof collection}`);
    }

    if (collection.length > 0) {
        return collection.join(' | ');
    }
    
    return "";
};
