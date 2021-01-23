const request = require("supertest");
const app = require("./index");

describe("testing /activate path", () => {
    test("it should return status code 200", done => {
        request(app)
        .post("/activate?number=1234")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe("testing /codebreaker path", () => {
    test("it should return status code 200", done => {
        request(app)
        .post("/codebreaker?number=1234")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})