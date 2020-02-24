import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg
} from "nexus/dist/core";
import {
  Prisma,
  UserCreateInput,
  UserConnection,
  AggregateUser,
  AggregateUserPromise,
  UserConnectionPromise
} from "../../generated/prisma-client";
import { JWT_SECRET } from "../../const";
import * as jwt from "jsonwebtoken";

export const registerConfig: NexusOutputFieldConfig<"Mutation", "register"> = {
  type: "Me",
  args: { data: "UserCreateInput" },
  nullable: true,
  resolve: async (_, args, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const totalUser: any = await prisma
      .usersConnection()
      .aggregate()
      .count();
    const input = args.data;

    const inputWithRunningid = {
      ...input,
      runningId: totalUser + 1
    } as UserCreateInput;

    try {
      const user = await prisma.createUser(inputWithRunningid);

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
