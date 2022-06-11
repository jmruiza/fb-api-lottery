/* eslint-disable no-undef */

import {app} from "../index";
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
    });
    
    test("GET /api/users", async () => {
        const res = await request(app).get("/api/users");
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
    
    test("GET /user/:userId", async () => {
        const firstResponse = await request(app).get("/api/users");
        expect(firstResponse.status).toBe(200);
        const userId = firstResponse.body[0].id;
        
        const secondResponse = await request(app).get("/api/user/" + userId);
        expect(secondResponse.status).toBe(200);
        expect(secondResponse.body).toBeInstanceOf(Object);
    });

    test("PUT /user/:user_id", async () => {
        const firstResponse = await request(app).get("/api/users");
        expect(firstResponse.status).toBe(200);
        const userId = firstResponse.body[0].id;

        const secondResponse = await request(app)
            .put("/api/user/" + userId)
            .send({email: "email@updated.com"});
        expect(secondResponse.status).toBe(200);
        expect(secondResponse.body).toBeInstanceOf(Object);
    });
  
    test("DELETE /user/:user_id", async () => {
        const firstResponse = await request(app).get("/api/users");
        expect(firstResponse.status).toBe(200);
        const userId = firstResponse.body[0].id;
       
        const secondResponse = await request(app).delete("/api/user/" + userId);
        expect(secondResponse.status).toBe(200);
        expect(secondResponse.body).toBeInstanceOf(Object);
    });
});
