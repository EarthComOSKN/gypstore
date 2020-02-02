import { Navbar } from "../navigation/Navbar";
import styled from "@emotion/styled";
import SignIn from "./SignIn";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignInPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SignIn />
      </Container>
    </div>
  );
};
