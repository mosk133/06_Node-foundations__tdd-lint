import { describe,test,expect } from "vitest";
import { isAdditionGreaterThanFifty } from "./isAdditionGreaterThanFifty";

describe("Given method isAdditionGreaterThanFifty", () => {
    test("When the sum of the two numbers is greater than 50 Then the result will be true", () => {
        //Arrange
        const summand1 = 40;
        const summand2 = 20;
    
        //Act
        const result = isAdditionGreaterThanFifty(summand1,summand2);
    
        //Assert
        expect(result).toBe(true);
    });

    test("When the sum of the two numbers is less than 50 Then the result will be false", () => {
        //Arrange
        const summand1 = 10;
        const summand2 = 20;
    
        //Act
        const result = isAdditionGreaterThanFifty(summand1,summand2);
    
        //Assert
        expect(result).toBe(false);
    });

    test("When the sum of the two numbers is exactly 50 Then the result should be true", () => {
        //Arrange
        const summand1 = 30;
        const summand2 = 20;
    
        //Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);
    
        //Assert
        expect(result).toBe(true);
    });

    test("When the first summand is not a number Then an error should be thrown", () => {
        //Arrange
        const summand1WithError = "not a number";
        const summand2 = 20;
    
        //Act
        //Assert
        expect(() => isAdditionGreaterThanFifty(summand1WithError, summand2)).toThrowError(TypeError);
        expect(() => isAdditionGreaterThanFifty(summand1WithError, summand2)).toThrowError("expected number but received string");
    });

    test("When the second summand is not a number Then an error should be thrown", () => {
        //Arrange
        const summand1 = 20;
        const summand2WithError = true;
    
        //Act
        //Assert
        expect(() => isAdditionGreaterThanFifty(summand1, summand2WithError)).toThrowError(TypeError);
        expect(() => isAdditionGreaterThanFifty(summand1, summand2WithError)).toThrowError("expected number but received boolean");
    });

    test("When both summands are not numbers Then an error should be thrown", () => {
        // Arrange
        const summand1WithError = "not a number";
        const summand2WithError = null;
    
        // Act & Assert
        expect(() => isAdditionGreaterThanFifty(summand1WithError, summand2WithError)).toThrowError(TypeError);
        expect(() => isAdditionGreaterThanFifty(summand1WithError, summand2WithError)).toThrowError("expected number but received string");
    });
});
