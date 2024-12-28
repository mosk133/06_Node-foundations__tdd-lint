import {describe, test, expect} from "vitest";
import { getTotalWordsFromString } from "./getTotalWordsFromString";

describe("Given method getTotalWordsFromString", () => {
    test("When input is not a string Then an error should be thrown", () => {
        //Arrange
        const invalidInput = 4;

        //Act
        //Assert
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError(TypeError);
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError("expected string but received number");
    });

    test("When the input is not a string (boolean) Then it should throw a TypeError", () => {
        //Arrange
        const invalidInput = false;

        //Act
        //Assert
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError(TypeError);
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError("expected string but received boolean");
    });

    test("When the input is not a string (null) Then it should throw a TypeError", () => {
        //Arrange
        const invalidInput = null;

        //Act
        //Assert
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError("expected string but received object");
    });

    test("When the input string is empty Then it should return 0", () => {
        //Arrange
        const emptyString = "";

        //Act
        const result = getTotalWordsFromString(emptyString);

        //Assert
        expect(result).toBe(1);
    });

    test("When input is a valid string Then it return the total number of words", () => {
        //Arrange
        const validInput = "hello world";

        //Act
        const result = getTotalWordsFromString(validInput);

        //Assert
        expect(result).toBe(2);
    });

    test("When the input string contains only one word, Then it should return 1", () => {
        //Arrange
        const singleWord = "hello";

        //Act
        const result = getTotalWordsFromString(singleWord);

        //Assert
        expect(result).toBe(1);
    });
})
