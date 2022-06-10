/* eslint-disable no-undef */

import app from "../app";
import request from "supertest";

describe("GET /hello-world", () => {
    test("should be ready", () => {
        expect(true).toBeTruthy();
    });

    test("should return a 200 status code", async () => {
        const res = await request(app)
            .get("/hello-world");
        const {status, body} = res;
        expect(status).toBe(200);
        expect(body.message).toBe("Hello World!");
    });
});
