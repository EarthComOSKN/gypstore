import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { idArg } from "nexus";

export const Mutation = prismaObjectType({
  name: "Mutation",

  definition(t) {
    // Expose only the `createTodo` mutation (`updateTodo` and `deleteTodo` not exposed)
    t.prismaFields(["*"]);

    // Add a custom `markAsDone` mutation
    t.field("register2", {
      type: "Address",
      args: { id: idArg() },
      nullable: true,
      resolve: (_, { id }, ctx) => {
        return null;
      }
    });
  }
});
