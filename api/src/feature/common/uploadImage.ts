import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg,
} from "nexus/dist/core";
import { Prisma } from "../../generated/prisma-client";
import { JWT_SECRET } from "../../const";
import * as jwt from "jsonwebtoken";
import { storageService } from "../../../storageService";

export const uploadImageConfing: NexusOutputFieldConfig<
  "Mutation",
  "uploadImage"
> = {
  type: "String",
  args: { file: stringArg(), type: stringArg(), path: stringArg() },
  nullable: true,
  resolve: async (_, args, ctx) => {
    const { file, type, path } = args;
    const buff = Buffer.from(file, "base64");
    const res = await storageService.upload(path, buff, {
      contentType: type,
    });
    console.log(res);
    return res;
  },
};
