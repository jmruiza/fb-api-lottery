/* eslint-disable no-undef */

import app from "../app";
import request from "supertest";
import {faker} from "@faker-js/faker";

describe("/api/user", () => {
    test("POST /api/user", async () => {
        const res = await request(app)
            .post("/api/user")
            .send({
                name: faker.name.findName(),
                email: faker.internet.email(),
            });
            // .attach('avatar', 'test/fixtures/avatar.jpg');
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body).toStrictEqual({message: "User created!"});
    });

    let userId;

    test("GET /api/users", async () => {
        const res = await request(app)
            .get("/api/users");
        userId = res.body[0].id;
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });

/*
    test("PUT /user/:user_id", async () => {
        const res = await request(app)
            .put("/api/user/" + userId)
            .send({email: "email@updated.com"});
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject(Object);
    });

    test("GET /user/:user_id", async () => {
        const res = await request(app)
            .get("/api/user/" + userId);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
    });

    
    test("DELETE /user/:user_id", async () => {
        const res = await request(app)
            .delete("/api/user/" + user.id);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
    });
    */
});
