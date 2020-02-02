import styled from "@emotion/styled";
import SignUp from "./SignUp";
import { Navbar } from "../navigation/Navbar";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SignUp />
      </Container>
    </div>
  );
};
