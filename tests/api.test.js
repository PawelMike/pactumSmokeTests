import { expect } from "chai";
import pkg from "pactum";
const { spec } = pkg;
import "dotenv/config";
import { baseURL } from "../helpers/data.js";

// let token_response;

describe("API smoke test", () => {
  it("Get products by id", async () => {
    const response = await spec()
      .post(`${baseURL}`)
      .withGraphQLQuery(`{
        }`)
      .inspect();
    expect(response.statusCode).to.eql(200);
  });

  it("Get mini cart id", async () => {
    const response = await spec()
      .post(`${baseURL}`)
      .withGraphQLQuery(`{

        }`)
      .inspect();
    expect(response.statusCode).to.eql(201);
  });

  // it("Generate User Token", async () => {
  //   const response = await spec()
  //     .post(`${baseURL}`)
  //     .withBody({
  //       userName: user,
  //       password: password,
  //     })
  //     .inspect();
  //   token_response = response.body.token;
  //   console.log(token_response);
  //   expect(response.statusCode).to.eql(200);
  //   expect(response.body.result).to.eql("User authorized successfully.");
  // });

  // it("Check token", async () => {
  //   console.log("another it block " + token_response);
  // });

  // it("Authorize user", async () => {
  //   const response = await spec()
  //     .post(`${baseURL}`)
  //     .withBody({
  //       userName: user,
  //       password: password,
  //     })
  //     .inspect();
  //   expect(response.statusCode).to.eql(200);
  //   //expect(response.body.result).to.eql("User authorized successfully.");
  // });

  // it("Add book to user acount", async () => {
  //   const response = await spec()
  //     .post(`${baseURL}`)
  //     .withBearerToken(token_response)
  //     .withBody({
  //       userId: userID,
  //       collectionOfIsbns: [
  //         {
  //           isbn: book_isbn,
  //         },
  //       ],
  //     })
  //     .inspect();
  //   expect(response.statusCode).to.eql(201);
  // });

  // it("User books", async () => {
  //   const response = await spec()
  //     .post(`${baseURL}/Account/v1/User/${userID}`)
  //     .withBearerToken(token_response)
  //     .inspect();
  //   expect(response.statusCode).to.eql(200);
  // });
});
