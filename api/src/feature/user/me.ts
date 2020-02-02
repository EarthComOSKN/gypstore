import { NexusOutputFieldConfig } from "nexus/dist/core";
import { Prisma } from "../../generated/prisma-client";

export const meConfig: NexusOutputFieldConfig<"Query", "me"> = {
  type: "User",
  nullable: true,
  resolve: async (_, args, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const { id: userId } = ctx.user;
    const user = await prisma.user({ id: userId });
    return user;
  }
};
