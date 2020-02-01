import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { registerConfig } from "./feature/authen/register";
import { loginConfig } from "./feature/authen/login";
export const Mutation = prismaObjectType({
  name: "Mutation",

  definition(t) {
    t.prismaFields(["*"]);
    t.field("register", registerConfig);
    t.field("login", loginConfig);
  }
});
