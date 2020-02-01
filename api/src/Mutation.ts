import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { registerConfig, loginConfig } from "./feature/authen/register";
export const Mutation = prismaObjectType({
  name: "Mutation",

  definition(t) {
    t.prismaFields(["*"]);
    t.field("register", registerConfig);
    t.field("login", loginConfig);
  }
});
