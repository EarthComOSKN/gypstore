import { objectType, idArg } from "nexus";

export const Me = objectType({
  name: "Me",
  definition(t) {
    t.string("token");
    t.field("user", {
      type: "User"
    });
  }
});
