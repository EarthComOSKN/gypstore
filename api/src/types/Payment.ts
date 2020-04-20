import { objectType, idArg } from "nexus";

export const OmiseResponse = objectType({
  name: "OmiseResponse",
  definition(t) {
    t.string("status");
  },
});
