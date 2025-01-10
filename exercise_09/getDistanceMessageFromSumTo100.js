/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
 * - if sum result exceeds 100, then return message "Sum with value <random> exceeds in <sum> from number 100"
 * - otherwise, return message "Sum with value <random> is left in <result> from number 100"
 * input: number (value)
 * output: string
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

/**
 * Computes the sum of the input value and a random number.
 * @param {number} value - The input number to sum with the random number.
 * @returns string - Message indicating whether the sum exceeds or is left to reach 100.
 */
export const getDistanceMessageFromSumTo100 = (value) => {
    if (typeof value !== 'number'){
        throw new TypeError(`expected number but received ${typeof value}`);
    }

    const sumValue = Math.round(Math.random() * 100) + value;
    
    if (sumValue > 100){
        const exceeds = sumValue - 100;
        return "Sum with value " +sumValue+ " exceeds in " +exceeds+ " from number 100";
    }
    const leftOver = 100 - sumValue;
    return "Sum with value " +sumValue+ " is left in " +leftOver+ " from number 100";
};
