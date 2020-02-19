import styled from "@emotion/styled";

const Container = styled.div`
  padding: 2rem 8rem;
  text-align: center;
`;

const BrandList = styled.div`
  display: flex;
  padding: 1rem 1rem 2rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BrandImageContainer = styled.div`
  > img {
    max-width: 120px;
    padding: 0rem 1rem;
    margin: 0rem 1rem;
  }
`;

export const PartnerCard = () => {
  return (
    <Container>
      <h2>แบรนด์ที่เข้าร่วมกับเรา</h2>
      <BrandList>
        <BrandImageContainer>
          <img alt="ยิปรอค" src="/assets/gyproc-logo.png" />
        </BrandImageContainer>
        <BrandImageContainer>  
          <img alt="ตรงช้าง" src="/assets/scg-logo.png" />
        </BrandImageContainer>
        <BrandImageContainer>
          <img alt="เอสซีแอล" src="/assets/scl-logo.png" />
        </BrandImageContainer>
        <BrandImageContainer>    
          <img alt="คนอฟ" src="/assets/knauf-logo.png" />
        </BrandImageContainer>
        <BrandImageContainer>
          <img alt="rockwool" src="/assets/rockwool-logo.png" />
        </BrandImageContainer>
        <BrandImageContainer>
          <img alt="shera" src="/assets/shera-logo.png" />
        </BrandImageContainer>
      </BrandList>
      {/* <h2>ทำไมต้องยิปสโตร์</h2> */}
    </Container>
  );
}