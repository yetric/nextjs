import { describe, expect, test } from "@jest/globals";
import {
    getURLParameters,
    isArray,
    isFalsy,
    isJson,
    isObject,
    isString
} from "../src/core/functions";

describe("test core functions", () => {
    test("isFalsy", () => {
        expect(isFalsy(false)).toBe(true);
        expect(isFalsy(true)).toBe(false);
        expect(isFalsy([])).toBe(true);
        expect(isFalsy(["item"])).toBe(false);
        expect(isFalsy({})).toBe(true);
        expect(isFalsy({ foo: "bar" })).toBe(false);
        expect(isFalsy(null)).toBe(true);
        expect(isFalsy("False")).toBe(true);
        expect(isFalsy("false")).toBe(true);
        expect(isFalsy(undefined)).toBe(true);
        expect(isFalsy(1)).toBe(false);
        expect(isFalsy(0)).toBe(true);
    });

    test("Test URL parsing out params", () => {
        let url =
            "https://mäklarinfo.se/uppsala/hitta?maxListPrice=1500000&minRooms=1&maxRooms=2&objectType=l%C3%A4genhet&city=183&q=&minListPrice=&minLivingArea=&maxLivingArea=&rooms[0]=1";
        let parsed = getURLParameters(url);
        expect(parsed.minRooms).toBe(1);
        expect(parsed.maxRooms).toBe(2);
        expect(parsed.maxListPrice).toBe(1500000);
        expect(parsed.city).toBe(183);
        expect(parsed.objectType).toBe("lägenhet");
        expect(parsed.minListPrice).toBe(undefined);
        expect(parsed.q).toBe(undefined);
        expect(isObject(parsed)).toBe(true);
        expect(isArray(parsed)).toBe(false);
        expect(isString(parsed)).toBe(false);
    });

    test("JSON stuff", () => {
        expect(isJson('{"foo": "barn"}')).toBe(true);
        expect(isJson("{}")).toBe(true);
        expect(isJson("[]")).toBe(true);
        expect(isJson(5)).toBe(false);
        expect(isJson(false)).toBe(false);
        expect(isJson(null)).toBe(false);
        expect(isJson({ foo: "bar" })).toBe(false);
        expect(isJson([])).toBe(false);
    });
});
