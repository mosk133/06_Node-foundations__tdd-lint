/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

/**
 * Checks whether the sum of two numbers is greater than or equal to a defined threshold.
 * @param {number} summand1 - The first number to add. 
 * @param {number} summand2 - The secon number to add.
 * @returns boolean - 'true' if the sum is 50 or greater, otherwise 'false'.
 */
export const isAdditionGreaterThanFifty = (summand1, summand2) => {
    if (typeof summand1 !== 'number'){
        throw new TypeError (`expected number but received ${typeof summand1}`)
    }
    if (typeof summand2 !== 'number'){
        throw new TypeError (`expected number but received ${typeof summand2}`)
    }

    const threshold = 50;
    return summand1 + summand2 >= threshold;
};
