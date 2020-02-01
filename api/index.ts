import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import * as path from "path";
import { ApolloServer } from "apollo-server";

import { prisma } from "./src/generated/prisma-client";
import datamodelInfo from "./src/generated/nexus-prisma";
import { Query } from "./src/Query";
import { Mutation } from "./src/Mutation";
import { User } from "./src/types/User";
import { Me } from "./src/types/Me";

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

const server = new ApolloServer({
  schema,
  context: { prisma }
});
server.listen(4000, () =>
  console.log("Server is running on http://localhost:4000")
);
