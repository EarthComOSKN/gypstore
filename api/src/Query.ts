import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { meConfig } from "./feature/user/me";

export const Query = prismaObjectType({
  name: "Query",
  // Expose all generated `Todo`-queries
  definition: t => {
    t.prismaFields(["*"]);
    t.field("me", meConfig);
  }
});
