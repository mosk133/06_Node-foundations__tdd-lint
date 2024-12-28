import { describe,test,expect } from "vitest";
import { isGreaterThan } from "./isGreaterThan.js";

describe("Given method isGreaterThan", () => {
    test("When both inputs are not numbers Then an error should be thrown", () => {
        //Arrange
        const valueWithError = "this is string";
        const thresholdWithError = true;

        //Act
        //Assert
        expect(() => isGreaterThan(valueWithError,thresholdWithError)).toThrowError(TypeError);
    });

    test(("When the input threshold is not a number Then an error should be thrown"), () => {
        //Arrange
        const value = 10;
        const thresholdWithError = "this is string";

        //Act
        //Assert
        expect(() => isGreaterThan(value,thresholdWithError)).toThrowError(TypeError);
        expect(() => isGreaterThan(value,thresholdWithError)).toThrowError("expected number but received string");
    });

    test(("When the input value is not a number Then an error should be thrown"), () => {
        //Arrange
        const valueWithError = false;
        const threshold = 10;

        //Act
        //Assert
        expect(() => isGreaterThan(valueWithError,threshold)).toThrowError(TypeError);
        expect(() => isGreaterThan(valueWithError,threshold)).toThrowError("expected number but received boolean");
    });

    test("When the input value is greater than the threshold Then the result should be true", () => {
        //Arrange
        const value = 60;
        const threshold = 50;

        //Act
        const result = isGreaterThan(value,threshold);

        //Assert
        expect(result).toBe(true);
    });

    test("When the input value is equal to the threshold Then the result should be false", () => {
        //Arrange
        const value = 50;
        const threshold = 50;
    
        //Act
        const result = isGreaterThan(value, threshold);
    
        //Assert
        expect(result).toBe(false);
    });

    test("When the value is a negative number and greater than a negative threshold Then the result should be true", () => {
        //Arrange
        const value = -5;
        const threshold = -10;
    
        //Act
        const result = isGreaterThan(value, threshold);
    
        //Assert
        expect(result).toBe(true);
    });

    test("When both inputs are large numbers Then it should return the correct result", () => {
        //Arrange
        const value = 1000000;
        const threshold = 999999;
    
        //Act
        const result = isGreaterThan(value, threshold);
    
        //Assert
        expect(result).toBe(true);
    });
});
