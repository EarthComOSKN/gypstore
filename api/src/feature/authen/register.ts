import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg,
} from "nexus/dist/core";
import {
  Prisma,
  UserCreateInput,
  UserConnection,
  AggregateUser,
  AggregateUserPromise,
  UserConnectionPromise,
} from "../../generated/prisma-client";
import { JWT_SECRET } from "../../const";
import * as jwt from "jsonwebtoken";
import S3Service from "../../s3";
import { storageService } from "../../../storageService";

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
    const input: any = args.data;
    console.log(input);
    let avatarUrl;
    try {
      if (input.avatar) {
        const buff = Buffer.from(input.avatar.split(",")[1], "base64");
        avatarUrl = await storageService.upload(
          `avatar/${input.email}.png`,
          buff,
          {
            contentType: "image/png",
          }
        );
      }
    } catch (error) {}

    const inputWithRunningid = {
      ...input,
      avatar: avatarUrl,
      runningId: totalUser + 1,
    } as UserCreateInput;

    try {
      const user = await prisma.createUser(inputWithRunningid);

      const { id, email } = user;
      return {
        token: jwt.sign(
          {
            id,
            email,
          },
          JWT_SECRET
        ),
        user,
      };
    } catch (error) {
      console.log(error);
      throw Error("Email already taken");
    }
  },
};
