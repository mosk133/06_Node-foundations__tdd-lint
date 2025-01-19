import { describe,test,expect } from "vitest";
import { isTypeOf } from "./isTypeOf.js";

describe("Given method isTypeOf", () => {
    test("When type argument is not valid Then it should throw a TypeError", () => {
        //Arrange
        const value = "foo";
        const invalidType = 4;

        //Act
        //Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(TypeError);
        expect(() => isTypeOf(value, invalidType)).toThrowError("expected one of 'string', 'number', 'boolean', 'array' but received number");
    });

    test("When type is 'string' and value is a string Then it should return true", () => {
        //Arrange
        const value = "foo";
        const type = "string";

        //Act
        const result = isTypeOf(value, type);

        //Assert
        expect(result).toBe(true);
    });

    test("When type is null Then it should throw a TypeError", () => {
        //Arrange
        const value = 12;
        const invalidType = null;

        //Act
        //Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(TypeError);
        expect(() => isTypeOf(value, invalidType)).toThrowError("expected one of 'string', 'number', 'boolean', 'array' but received object");
    });

    test("When value is an array and type is 'array' Then it should return true", () => {
        //Arrange
        const value = [1, 2, 3];
        const type = "array";

        //Act
        const result = isTypeOf(value, type);

        //Assert
        expect(result).toBe(true);
    });

    test("When value does not match the specified type Then it should return false", () => {
        //Arrange
        const value = 443;
        const type = "string";

        //Act
        const result = isTypeOf(value, type);

        //Assert
        expect(result).toBe(false);
    });

    test("When type is a boolean Then it should throw a TypeError", () => {
        //Arrange
        const value = false;
        const invalidType = true;

        //Act
        //Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(TypeError);
        expect(() => isTypeOf(value, invalidType)).toThrowError("expected one of 'string', 'number', 'boolean', 'array' but received boolean");
    });
});
