import { Navbar } from "../../component/Navbar";
import SignUp from "../../component/SignUp";
import SignIn from "../../component/SignIn"
import styled from "@emotion/styled";

const Container = styled.div`
  width: 850 px;
  display: flex;
  justify-content: space-between;
  margin: 30px 80px;
`;

export const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SignUp />
        <SignIn />
      </Container>
    </div>
  );
};
