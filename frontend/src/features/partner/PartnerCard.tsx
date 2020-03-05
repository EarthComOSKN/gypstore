import styled from "@emotion/styled";
import { PartnerCardImg } from "./PartnerCardImg";
import { BRAND } from "./const";

const Container = styled.div`
  padding: 2rem 8rem 1rem 8rem;
  margin: 2rem 0rem;
  background-color: #ff8e0a;
  text-align: center;
`;

const BrandList = styled.div`
  display: flex;
  padding: 1rem 1rem 2rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PartnerCard = () => {
  return (
    <Container>
      <h2>แบรนด์ที่เข้าร่วมกับเรา</h2>
      <BrandList>
        {BRAND.map(c => (
          <PartnerCardImg name={c[0]} source={c[1]} />
        ))}
      </BrandList>
    </Container>
  )
}