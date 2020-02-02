import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "src/features/navigation/gql";
import { useRouter } from "next/router";

export const useAuthenticateOnly = () => {
  const { data, loading } = useQuery(GET_ME, { fetchPolicy: "network-only" });
  const router = useRouter();
  if (loading) return null;
  console.log(data);
  if (!data.me) router.push("/");
  return null;
};
