import styled from "@emotion/styled";
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../../component/Footer';

const Container = styled.div`
  height: 35rem;
  width: 100%;
  padding: 3rem 8rem;
  background-color: white;
`;

export const PromotionPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Test</h1>
      </Container>
      <Footer />

    </>
  )
}