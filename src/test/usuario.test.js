import request from "supertest";
import app from "../app.js";

describe("GET /usuario", () => {
  test("If the status is 200", () => {
    return request(app)
      .get("/usuario")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("GET /usuario/id/:id", () => {
  test("If the status is 200", () => {
    return request(app)
      .get("/usuario/id/2")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST /usuario", () => {
  test("If the body exists", () => {
    return request(app)
      .post("/usuario")
      .send({
        nome: "Vera Lucia",
        email: "veralucia@yahoo.com.br",
        telefone: "(21) 994456873",
        endereco: "Rua Santo Amando, 565, Irajá, RJ",
        senha: "354767",
      })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBeTruthy();
      });
  });
});

describe("PUT /usuario", () => {
  test("If error = false", () => {
    return request(app)
      .put("/usuario/id/6")
      .send({
        nome: "anderson pereira gomes da costa",
        email: "anderson@yahoo.com.br",
        telefone: "(21) 994473873",
        endereco: "Rua damiao de gois, 485, Campo Grande, RJ",
        senha: "354767",
      })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.error).toBe(false);
      });
  });
});

describe("DELETE usuario/id/2", () => {
  test("If the status is 200", () => {
    return request(app)
      .delete("/books/book/2")
      .then((response) => {
        expect(response.statusCode).toBe(202);
      });
  });
});
