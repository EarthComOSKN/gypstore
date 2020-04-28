import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import * as path from "path";
import { ApolloServer } from "apollo-server-express";

import { prisma } from "./src/generated/prisma-client";
import datamodelInfo from "./src/generated/nexus-prisma";
import { Query } from "./src/Query";
import { Mutation } from "./src/Mutation";
import { User } from "./src/types/User";
import { Me } from "./src/types/Me";
import * as express from "express";
import { getUserFromToken } from "./lib/jwt";
import * as bodyParser from "body-parser";
import { OmiseResponse } from "./src/types/Payment";

const app = express();

const schema = makePrismaSchema({
  types: [Query, Mutation, User, Me, OmiseResponse],

  prisma: {
    client: prisma,
    datamodelInfo,
  },

  outputs: {
    schema: path.join(__dirname, "./src/generated/schema.graphql"),
    typegen: path.join(__dirname, "./src/generated/nexus.ts"),
  },
});

app.use((req: any, res, next) => {
  try {
    const { id, email } = getUserFromToken(req) as {
      id: string;
      email: string;
    };
    req.user = {
      id,
      email,
    };
    next();
  } catch (error) {
    res
      .set("Access-Control-Allow-Origin", "*")
      .status(401)
      .send({ error: "invalid token" });
    throw error;
  }
});
// app.use(bodyParser.json());
app.post("/upload-image", (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return { ...req, prisma };
  },
});

server.applyMiddleware({
  app,
  cors: true,
  path: "/",
  bodyParserConfig: {
    limit: "100mb",
  },
});
// app.use(bodyParser.json({ limit: "100mb" }));
// app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.listen(4000, () =>
  console.log("Server is running on http://localhost:4000")
);
