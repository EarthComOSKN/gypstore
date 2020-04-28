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
    orderId: idArg(),
    token: stringArg(),
    amount: intArg(),
    userId: idArg(),
  },
  nullable: true,
  resolve: async (_, args, ctx) => {
    const prisma: Prisma = ctx.prisma;
    const order = await prisma.order({ id: args.orderId });
    console.log(order);
    console.log(args.token);

    try {
      const omiseRes = await omise.charges.create({
        amount: args.amount,
        currency: "thb",
        card: args.token,
      });

      const payment = await prisma.createPayment({
        docId: "PAYMENT",
        amount: "" + args.amount,
        rawEvent: JSON.stringify(omiseRes) || "",
        customer: {
          connect: {
            id: args.userId,
          },
        },
        order: {
          connect: {
            id: args.orderId,
          },
        },
      });
      await prisma.updateOrder({
        where: {
          id: args.orderId,
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
