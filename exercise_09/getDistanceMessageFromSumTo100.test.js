import { describe,test,expect,vi } from "vitest";
import { getDistanceMessageFromSumTo100 } from "./getDistanceMessageFromSumTo100";

describe("Given method getDistanceMessageFromSumTo100", () => {
    test("When the sum exceeds 100 The message should indicate the excess", () => {
        //Mock
        const mockRandomValue = 0.25;
        vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        //Arrange
        const value = 80;

        //Act
        const result = getDistanceMessageFromSumTo100(value);

        //Assert
        expect(result).toBe("Sum with value 105 exceeds in 5 from number 100");
    });

    test("When the sum less 100 The message should indicate the remaining value", () => {
        //Mock
        const mockRandomValue = 0.50;
        vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        //Arrange
        const value = 40;

        //Act
        const result = getDistanceMessageFromSumTo100(value);

        //Assert
        expect(result).toBe("Sum with value 90 is left in 10 from number 100");
    });

    test("When the sum equals exactly 100 The message should indicate the remaining value 0", () => {
        //Mock
        const mockRandomValue = 0.50;
        vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        //Arrange
        const value = 50;

        //Act
        const result = getDistanceMessageFromSumTo100(value);

        //Assert
        expect(result).toBe("Sum with value 100 is left in 0 from number 100");
    });

    test("When the sum equals exactly 100 The message should indicate the remaining value 0", () => {
        //Mock
        const mockRandomValue = 0.50;
        vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        //Arrange
        const value = 50;

        //Act
        const result = getDistanceMessageFromSumTo100(value);

        //Assert
        expect(result).toBe("Sum with value 100 is left in 0 from number 100");
    });

    test("When input is a string Then should throw a TypeError", () => {
        //Arrange
        const invalidInput = "not a number";

        //Act
        //Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError(TypeError);
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received string");
    });

    test("When input is a array Then should throw a TypeError", () => {
        //Arrange
        const invalidInput = [1, 2, 3];

        //Act
        //Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError(TypeError);
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received object");
    });

    test("When input is a undefined Then should throw a TypeError", () => {
        //Arrange
        const invalidInput = undefined;

        //Act
        //Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError(TypeError);
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received undefined");
    });
});
