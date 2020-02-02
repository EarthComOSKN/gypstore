import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../src/const";

export const decryptAuthorization = (token: string) =>
  jwt.verify(token, JWT_SECRET);

export const getUserFromToken = (req: any) => {
  const Authorization = req.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    try {
      const decrypt = decryptAuthorization(token);
      return decrypt;
    } catch (err) {
      console.log("token error", err.name, err.message);
      throw new Error("Token incorrect");
    }
  }
  return {};
};
