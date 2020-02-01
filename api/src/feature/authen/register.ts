import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg
} from "nexus/dist/core";
import { Prisma } from "../../generated/prisma-client";
import { JWT_SECRET } from "../../const";
import * as jwt from "jsonwebtoken";

import { createError } from "apollo-errors";

export const registerConfig: NexusOutputFieldConfig<"Mutation", "register"> = {
  type: "Me",
  args: { data: "UserCreateInput" },
  nullable: true,
  resolve: async (_, { data }, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const user = await prisma.createUser(data);

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

const WrongCredentialsError = createError("WrongCredentialsError", {
  message: "The provided credentials are invalid."
});
export const loginConfig: NexusOutputFieldConfig<"Mutation", "login"> = {
  type: "Me",
  args: { email: stringArg(), password: stringArg() },
  nullable: true,
  resolve: async (_, args, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const user = await prisma.user({ email: args.email });
    if (!user) return Error("User Not Found");
    if (user.password !== args.password) Error("Authentication Failed");
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
