import { describe,test,expect } from "vitest";
import { checkCollectionHasElements } from "./checkCollectionHasElements";

describe("Given method checkCollectionHasElements", () => {
    test("When input is not an array Then it should throw a TypeError", () => {
        //Arrange
        const invalidInput = "this is not an array"

        //Act
        //Assert
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError(TypeError);
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received string");
    });

    test("When input is an empty array Then it should return false", () => {
        //Arrange
        const emptyArray = [];

        //Act
        const result = checkCollectionHasElements(emptyArray);

        //Assert
        expect(result).toBe(false);
    });

    test("When input is an array with one element Then it should return true", () => {
        //Arrange
        const OneElementArray = [1];

        //Act
        const result = checkCollectionHasElements(OneElementArray);

        //Assert
        expect(result).toBe(true);
    });

    test("When input is not an array Then an error should be thrown", () => {
        //Arrange
        const invalidInput = 13;

        //Act
        //Assert
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError(TypeError);
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received number");
    });

    test("When input is null Then an error should be thrown", () => {
        // Arrange
        const invalidInput = null;

        //Act
        //Assert
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError(TypeError);
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received object");
    });

    test("When input is an array with multiple element Then it should return true", () => {
        //Arrange
        const multipleElementsArray = [1, 2, 3];

        //Act
        const result = checkCollectionHasElements(multipleElementsArray);

        //Assert
        expect(result).toBe(true);
    });
});
