import {describe, test, expect} from "vitest";
import { getDistanceFromThreshold } from "./getDistanceFromThreshold.js";

describe("Given method getDistanceFromThreshold",() => {
    test(("When both inputs are not numbers Then an error should be thrown"), () => {
        //Arrange
        const valueWithError = true;
        const thresholdWithError = "this is string";

        //Act
        //Assert
        expect(() => getDistanceFromThreshold(valueWithError,thresholdWithError)).toThrowError(TypeError);
        expect(() => getDistanceFromThreshold(valueWithError,thresholdWithError)).toThrowError("expected number but received boolean");
    });

    test(("When the value is not a number Then an error should be thrown"), () => {
        //Arrange
        const valueWithError = "this is string";
        const threshold = 10;

        //Act
        //Assert
        expect(() => getDistanceFromThreshold(valueWithError,threshold)).toThrowError(TypeError);
        expect(() => getDistanceFromThreshold(valueWithError,threshold)).toThrowError("expected number but received string");
    });

    test(("When the threshold is not a number Then an error should be thrown"), () => {
        //Arrange
        const value = 10;
        const thresholdWithError = "this is string";

        //Act
        //Assert
        expect(() => getDistanceFromThreshold(value,thresholdWithError)).toThrowError(TypeError);
        expect(() => getDistanceFromThreshold(value,thresholdWithError)).toThrowError("expected number but received string");
    });

    test("When both inputs are valid numbers Then it calculates the distance correctly", () => {
        //Arrange
        const value = 60;
        const threshold = 50;
    
        //Act
        const result = getDistanceFromThreshold(value, threshold);

        //Assert
        expect(result).toBe(-10);
    });

    test("When both inputs are valid numbers Then it calculates the distance correctly", () => {
        //Arrange
        const value = 30;
        const threshold = 120;

        //Act
        const result = getDistanceFromThreshold(value, threshold);

        //Assert
        expect(result).toBe(90);
    });

    test("When both inputs sum exactly to the threshold Then it returns 0", () => {
        //Arrange
        const value = 40;
        const threshold = 40;

        //Act
        const result = getDistanceFromThreshold(value, threshold);

        //Assert
        expect(result).toBe(0);
    });
});
