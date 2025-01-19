import { describe,test,expect } from "vitest";
import { formatStringByWordsLength } from "./formatStringByWordsLength";

describe("Given method formatStringByWordsLength", () => {
    test("When input type is a number Then expected should be returned", () => {
        //Arrange
        const sentenceWithError = 4;

        //Act
        //Assert
        expect(() => formatStringByWordsLength(sentenceWithError)).toThrowError(TypeError);
        expect(() => formatStringByWordsLength(sentenceWithError)).toThrowError("expected string but received number");
    });

    test("When input is a string with more than 5 words Then it should return the uppercase version", () => {
        //Arrange
        const sentence = "This is a sentence with more than five words";
        
        //Act
        const result = formatStringByWordsLength(sentence);
        
        //Assert
        expect(result).toBe(sentence.toUpperCase());
    });

    test("When input is a string with 5 or fewer words Then it should return the lowercase version", () => {
        //Arrange
        const sentence = "This is a short sentence";
        
        //Act
        const result = formatStringByWordsLength(sentence);

        //Assert
        expect(result).toBe(sentence.toLowerCase());
    });

    test("When input is not a string Then it should throw a TypeError", () => {
        //Arrange
        const sentenceWithError = 12345;

        //Act 
        //Assert
        expect(() => formatStringByWordsLength(sentenceWithError)).toThrowError(TypeError);
        expect(() => formatStringByWordsLength(sentenceWithError)).toThrowError("expected string but received number");
    });

    test("When input is not a string Then it should throw a TypeError", () => {
        //Arrange
        const sentenceWithError = true;

        //Act 
        //Assert
        expect(() => formatStringByWordsLength(sentenceWithError)).toThrowError(TypeError);
        expect(() => formatStringByWordsLength(sentenceWithError)).toThrowError("expected string but received boolean");
    });

    test("When input is a empty string Then it should return the lowercase version", () => {
        //Arrange
        const emptySentence = "";
        
        //Act
        const result = formatStringByWordsLength(emptySentence);

        //Assert
        expect(result).toBe(emptySentence.toLowerCase());
    });
});
