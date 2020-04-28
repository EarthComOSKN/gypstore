import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { registerConfig } from "./feature/authen/register";
import { loginConfig } from "./feature/authen/login";
import { paymentConfig } from "./feature/payment/payViaOmise";
import { uploadImageConfing } from "./feature/common/uploadImage";
export const Mutation = prismaObjectType({
  name: "Mutation",

  definition(t) {
    t.prismaFields(["*"]);
    t.field("register", registerConfig);
    t.field("login", loginConfig);
    t.field("paymentViaOmise", paymentConfig);
    t.field("uploadImage", uploadImageConfing);
  },
});
