import styled from '@emotion/styled'
import { CategoryTag } from './CategoryTag'
import { CATEGORY } from './const'

const Container = styled.div`
  flex: 1;
  > h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

const CategoryResultContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  background: transparent;
`

export const CategoryList = () => {
  return (
    <Container>
      <h2>หมวดหมู่สินค้า</h2>
      <CategoryResultContainer>
        {CATEGORY.map(cat => (
          <CategoryTag key={cat} title={cat} />
        ))}
      </CategoryResultContainer>
    </Container>
  )
}
