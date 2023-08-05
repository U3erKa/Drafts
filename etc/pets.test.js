import supertest from "supertest"
import server from "../../app"
/** We will use this function to mock HTTP requests */
const requestWithSupertest = supertest(server)

/**
  "devDependencies": {
    "@babel/core": "^7.21.4",
    "@babel/preset-env": "^7.21.4",
    "babel-jest": "^29.5.0",
    "jest": "^29.5.0",
    "jest-babel": "^1.0.1",
    "nodemon": "^2.0.22",
    "supertest": "^6.3.3"
  }
 */

describe('GET "/"', () => {
  test('GET "/" returns all pets', async () => {
    const res = await requestWithSupertest.get("/pets")
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining("json"))
    expect(res.body).toEqual([
      { id: 1, name: "Rex", type: "dog", age: 3, breed: "labrador" },
      { id: 2, name: "Fido", type: "dog", age: 1, breed: "poodle" },
      { id: 3, name: "Mittens", type: "cat", age: 2, breed: "tabby" },
    ])
  })
})

describe('GET "/:id"', () => {
  test('GET "/:id" returns given pet', async () => {
    const res = await requestWithSupertest.get("/pets/1")
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining("json"))
    expect(res.body).toEqual({ id: 1, name: "Rex", type: "dog", age: 3, breed: "labrador" })
  })
})

describe('PUT "/:id"', () => {
  test('PUT "/:id" updates pet and returns it', async () => {
    const res = await requestWithSupertest
      .put("/pets/1")
      .send({ id: 1, name: "Rexo", type: "dogo", age: 4, breed: "doberman" })
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining("json"))
    expect(res.body).toEqual({ id: 1, name: "Rexo", type: "dogo", age: 4, breed: "doberman" })
  })
})

describe('POST "/"', () => {
  test('POST "/" adds new pet and returns the added item', async () => {
    const res = await requestWithSupertest.post("/pets").send({ name: "Salame", type: "cat", age: 6, breed: "pinky" })
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining("json"))
    expect(res.body).toEqual({ id: 4, name: "Salame", type: "cat", age: 6, breed: "pinky" })
  })
})

describe('DELETE "/:id"', () => {
  test('DELETE "/:id" deletes given pet and returns updated list', async () => {
    const res = await requestWithSupertest.delete("/pets/2")
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining("json"))
    expect(res.body).toEqual([
      { id: 1, name: "Rexo", type: "dogo", age: 4, breed: "doberman" },
      { id: 3, name: "Mittens", type: "cat", age: 2, breed: "tabby" },
      { id: 4, name: "Salame", type: "cat", age: 6, breed: "pinky" },
    ])
  })
})
