import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg
} from "nexus/dist/core";
import { Prisma } from "../../generated/prisma-client";
import { JWT_SECRET } from "../../const";
import * as jwt from "jsonwebtoken";

export const registerConfig: NexusOutputFieldConfig<"Mutation", "register"> = {
  type: "Me",
  args: { data: "UserCreateInput" },
  nullable: true,
  resolve: async (_, { data }, ctx) => {
    const prisma: Prisma = ctx.prisma;
    try {
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
    } catch (error) {
      throw Error("Email already taken");
    }
  }
};
