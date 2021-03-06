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

const app = express();

const schema = makePrismaSchema({
  types: [Query, Mutation, User, Me],

  prisma: {
    client: prisma,
    datamodelInfo
  },

  outputs: {
    schema: path.join(__dirname, "./src/generated/schema.graphql"),
    typegen: path.join(__dirname, "./src/generated/nexus.ts")
  }
});

app.use((req: any, res, next) => {
  try {
    const { id, email } = getUserFromToken(req) as {
      id: string;
      email: string;
    };
    req.user = {
      id,
      email
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

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return { ...req, prisma };
  }
});

server.applyMiddleware({
  app,
  cors: true,
  path: "/",
  bodyParserConfig: {
    limit: "30mb"
  }
});

app.listen(4000, () =>
  console.log("Server is running on http://localhost:4000")
);
