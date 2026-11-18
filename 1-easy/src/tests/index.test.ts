import {describe, expect, it} from "@jest/globals"

import { multiply, sum } from "../index.js";

describe('sum',()=>{
    it("Should be able to add two positive numbers",()=>{
        const ans = sum(2,3)
        expect(ans).toBe(5)
    })
    it("Should be able to add two negative numbers",()=>{
        const ans = sum(-2,-3)
        expect(ans).toBe(-5)
    })
    it("Should be able to add two zeroes",()=>{
        const ans = sum(0,0)
        expect(ans).toBe(0)
    })
})

describe('multiply',()=>{
    it("Should be able to multiply two positive numbers",()=>{
        const ans = multiply(2,3)
        expect(ans).toBe(6)
    })
})