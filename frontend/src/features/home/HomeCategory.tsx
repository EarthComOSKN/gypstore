import styled from "@emotion/styled";
import { HomeCategoryTag } from './HomeCategoryTag';
import { CATEGORY_ROW1 } from './const';
import { CATEGORY_ROW2 } from './const';

const Container = styled.div`
  background-color: white;  
  padding-bottom: 2rem;

  h1,
  h2,
  h3,
  h4 {  
    padding: 2rem 8rem 0rem 8rem;
  }
`;

const RowList = styled.div`
  width: 100%;
  margin: 1rem 0rem;
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
`;

export const HomeCategory = () => {
  return (
    <Container>
      <h2>หมวดหมู่สินค้า</h2>
      <RowList>
        {CATEGORY_ROW1.map(c => (
          <HomeCategoryTag name={c[0]} source={c[1]} />
        ))}
      </RowList>
      <RowList>
        {CATEGORY_ROW2.map(c => (
          <HomeCategoryTag name={c[0]} source={c[1]} />
        ))}
      </RowList>
    </Container>
  )
}