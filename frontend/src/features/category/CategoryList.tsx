import styled from "@emotion/styled";
import { CategoryTag } from "./CategoryTag";
import { CATEGORY } from "./const";

const Container = styled.div`
  flex: 1;
  > h1 {
    text-align: center;
  }
`;

const CategoryResultContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  background: transparent;
`;

export const CategoryList = () => {
  return (
    <Container>
      <h1>Catagories</h1>
      <CategoryResultContainer>
        {CATEGORY.map(cat => (
          <CategoryTag key={cat} title={cat} />
        ))}
      </CategoryResultContainer>
    </Container>
  );
};
