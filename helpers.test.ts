import {describe, expect, it} from "vitest"
import {loopArray} from "./helpers"

describe("the loopedArray function", () => {
	it("should return a looped version of the original array when the startingValue is within the array", () => {
		expect(loopArray([1, 2, 3], 2)).toStrictEqual([2, 3, 1])
		expect(loopArray([1, 2, 5], 5)).toStrictEqual([5, 1, 2])
		expect(loopArray([8, 2, 5, 1, 5], 1)).toStrictEqual([1, 5, 8, 2, 5])
		expect(loopArray(["a", "b", "z", "d", "e"], "z")).toStrictEqual(["z", "d", "e", "a", "b"])
	})
	it("should return -1 when the startingValue is not within the array", () => {
		expect(loopArray([1, 2, 5], 0)).toStrictEqual(-1)
		expect(loopArray([1, 2, 5], 1)).not.toStrictEqual(-1)
		expect(loopArray([1, 2, 6, 2], 0)).toStrictEqual(-1)
	})
	it("should return -1 when called with nothing", () => {
		/**@ts-expect-error This is intentionally handling the undefined value */
		expect(loopArray()).toStrictEqual(-1)
	})
})
