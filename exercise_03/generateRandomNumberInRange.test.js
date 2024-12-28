import {vi,describe,test,expect} from "vitest";
import { generateRandomNumberInRange } from "./generateRandomNumberInRange.js";

describe("Given method generateRandomNumberInRange", () => {
    test("When input is not a number Then an error must be thrown", () => {
        //Arrange
        const inputWithError = "this is string";

        //Act
        //Assert
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError(TypeError);
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError("expected number but received string");
    });

    test("When input is not a number Then an error must be thrown", () => {
        //Arrange
        const inputWithError = true;

        //Act
        //Assert
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError(TypeError);
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError("expected number but received boolean");
    });

    test("When input is not a number Then an error must be thrown", () => {
        //Arrange
        const inputWithError = null;

        //Act
        //Assert
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError(TypeError);
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError("expected number but received object");
    });

    test("When input is a negative number Then an error is thrown", () => {
        //Arrange
        const inputWithError = -20;

        //Act
        //Assert
        expect(() => generateRandomNumberInRange(inputWithError)).toThrowError();
    });

    test("When input is a valid number Then it generates a rounded random number based on the limit", () => {
        //Mock
        const mockRandomValue = 0.5;
        vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        //Arrange
        const input = 100;

        //Act
        const result = generateRandomNumberInRange(input);

        //Assert
        expect(result).toBe(50);
    });

    test("When input is a valid number Then it generates a rounded random number based on the limit", () => {
        //Mock
        const mockRandomValue = 0.1;
        vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        //Arrange
        const input = 50;

        //Act
        const result = generateRandomNumberInRange(input);

        //Assert
        expect(result).toBe(5);
    });

    test("When input is zero Then it returns 0", () => {
        // Arrange
        const input = 0;

        // Act
        const result = generateRandomNumberInRange(input);

        // Assert
        expect(result).toBe(0);
    });
});
