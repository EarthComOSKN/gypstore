import styled from "@emotion/styled";
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../../component/Footer';
import { Promotion } from "./const";
import { PromotionCard } from "./PromotionCard";

const PromotionContainer = styled.div`
  margin: 3rem;
  padding: 0rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;




export const PromotionPage = () => {
  return (
    <>
      <Navbar />
      <PromotionContainer>
        {Promotion.map(c => (
            <PromotionCard name={c[0]} source={c[1]} />
          ))}
      </PromotionContainer>
      <Footer />
    </>
  )
}