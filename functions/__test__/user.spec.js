/* eslint-disable no-undef */

import app from "../app";
import request from "supertest";

describe("GET /api/user", () => {
    test("should return a 200 status code", async () => {
        const res = await request(app)
            .get("/api/users");
        expect(res).not.toBeNull();
    });
});
