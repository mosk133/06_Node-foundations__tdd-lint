import { describe,test,expect } from "vitest";
import { transformCollectionToString } from "./transformCollectionToString";

describe("Given method transformCollectionToString", () => {
    test("When collection is a string Then should throw a TypeError", () => {
        //Arrange
        const collectionString = "foo";

        //Act
        //Assert
        expect(() => transformCollectionToString(collectionString)).toThrowError(TypeError);
        expect(() => transformCollectionToString(collectionString)).toThrowError("expected array but received string");
    });

    test("When collection is null Then should throw a TypeError", () => {
        //Arrange
        const collectionNull = null;

        //Act
        //Assert
        expect(() => transformCollectionToString(collectionNull)).toThrowError(TypeError);
        expect(() => transformCollectionToString(collectionNull)).toThrowError("expected array but received object");
    });

    test("When collection is a number Then should throw a TypeError", () => {
        //Arrange
        const collectionNumber = 123;

        //Act
        //Assert
        expect(() => transformCollectionToString(collectionNumber)).toThrowError(TypeError);
        expect(() => transformCollectionToString(collectionNumber)).toThrowError("expected array but received number");
    });

    test("When collection is an empty array Then it should return an empty string", () => {
        //Arrange
        const emptyCollection = [];

        //Act
        const result = transformCollectionToString(emptyCollection);

        //Assert
        expect(result).toBe('');
    });

    test("When collection has elements Then should return them as a separated string", () => {
        //Arrange
        const collection = ['foo', 'hi', 'bye'];

        //Act
        const result = transformCollectionToString(collection);

        //Assert
        expect(result).toBe('foo | hi | bye');
    });

    test("When collection has one element Then it should return the element as a string", () => {
        //Arrange
        const singleCollection = ['foo'];

        //Act
        const result = transformCollectionToString(singleCollection);

        //Assert
        expect(result).toBe('foo');
    });
});
