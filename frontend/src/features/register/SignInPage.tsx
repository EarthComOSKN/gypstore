import { Navbar } from "../../component/Navbar";

import styled from "@emotion/styled";
import SignUp from "./SignUp";
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
