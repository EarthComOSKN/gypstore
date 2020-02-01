import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg
} from "nexus/dist/core";
import { Prisma } from "../../generated/prisma-client";
import { JWT_SECRET } from "../../const";
import * as jwt from "jsonwebtoken";

export const loginConfig: NexusOutputFieldConfig<"Mutation", "login"> = {
  type: "Me",
  args: { email: stringArg(), password: stringArg() },
  nullable: true,
  resolve: async (_, args, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const user = await prisma.user({ email: args.email });
    if (!user) throw Error("User Not Found");
    if (user.password !== args.password) throw Error("Authentication Failed");
    const { id, email } = user;
    return {
      token: jwt.sign(
        {
          id,
          email
        },
        JWT_SECRET
      ),
      user
    };
  }
};
