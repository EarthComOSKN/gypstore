import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { idArg } from "nexus";
import * as path from "path";
import { ApolloServer } from "apollo-server";

import { prisma } from "./src/generated/prisma-client";
import datamodelInfo from "./src/generated/nexus-prisma";

// Expose the full "Query" building block
const Query = prismaObjectType({
  name: "Query",
  // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(["*"])
});

// Customize the "Mutation" building block
const Mutation = prismaObjectType({
  name: "Mutation",
  definition: t => t.prismaFields(["*"])
  // definition(t) {
  //   // Expose only the `createTodo` mutation (`updateTodo` and `deleteTodo` not exposed)
  //   t.prismaFields(["createTodo"]);

  //   // Add a custom `markAsDone` mutation
  //   t.field("markAsDone", {
  //     type: "Todo",
  //     args: { id: idArg() },
  //     nullable: true,
  //     resolve: (_, { id }, ctx) => {
  //       return ctx.prisma.updateTodo({
  //         where: { id },
  //         data: { done: true }
  //       });
  //     }
  //   });
  // }
});

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    client: prisma,
    datamodelInfo
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  }
});

const server = new ApolloServer({
  schema,
  context: { prisma }
});
server.listen(4000, () =>
  console.log("Server is running on http://localhost:4000")
);
