import { describe, expect, it,vi} from "vitest"
import {app} from "../index.js"
import request from "supertest"

vi.mock('../db.ts')

describe("Tests the sum function",()=>{
    it("Should return 3 when 1+2",async()=>{
        const res = await request(app).post("/sum").send({
            a:5,
            b:6
        })
        expect(res.body.sum).toBe(11)
        expect(res.statusCode).toBe(200)
    })
    it("Should return error message when big numbers",async()=>{
        const res = await request(app).post("/sum").send({
            a:10000000,
            b:6
        })
        expect(res.body.message).toBe("Sorry we don't support big numbers")
        expect(res.statusCode).toBe(422)
    })
})

describe("Tests the multiply function",()=>{
    it("Should return 6 when 2*3",async()=>{
        const res = await request(app).post("/multiply").send({
            a:2,
            b:3
        })
        expect(res.body.multiply).toBe(6)
        expect(res.statusCode).toBe(200)
    })
})