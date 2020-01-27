import { prismaObjectType, makePrismaSchema } from "nexus-prisma";

export const Query = prismaObjectType({
  name: "Query",
  // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(["*"])
});
