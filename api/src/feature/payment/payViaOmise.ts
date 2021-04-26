import {
  NexusOutputFieldConfig,
  objectType,
  mutationField,
  stringArg,
  idArg,
  intArg,
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
import { omise } from "../../omise";
export const paymentConfig: NexusOutputFieldConfig<
  "Mutation",
  "paymentViaOmise"
> = {
  type: "Payment",
  args: {
    quotationId: idArg(),
    token: stringArg(),
    amount: intArg(),
    userId: idArg(),
  },
  nullable: true,
  resolve: async (_, args, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const quotation = await prisma.quotation({ id: args.quotationId });
    console.log(quotation);
    console.log(args.token);

    try {
      const omiseRes = await omise.charges.create({
        amount: args.amount,
        currency: "thb",
        card: args.token,
      });

      const payment = await prisma.createPayment({
        docId: "PAYMENT001",
        amount: "" + args.amount,
        rawEvent: JSON.stringify(omiseRes) || "",
        customer: {
          connect: {
            id: args.userId,
          },
        },
        quotation: {
          connect: {
            id: args.quotationId,
          },
        },
      });
      await prisma.updateQuotation({
        where: {
          id: args.quotationId,
        },
        data: {
          status: "PAID",
        },
      });
      return payment;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  },
};
