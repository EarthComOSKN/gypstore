import styled from '@emotion/styled'
import { Card } from 'antd'

const StyledCard = styled(Card)`
  cursor: pointer;
  & .ant-card-body {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  :hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }
`

const CategoryLogo = styled.img`
  height: 60px;
  width: auto;
  margin-right: 1rem;
`

const CategoryName = styled.h3`
  margin: 0;
  width: 100%;
  text-align: center;
`

type Props = {
  title: string
}

export const CategoryTag = (props: Props) => {
  const { title } = props
  return (
    <a href={`/category/${title}`}>
      <StyledCard>
        <CategoryLogo src="/assets/logo-without-text.png" alt="logo" />
        <CategoryName>{title}</CategoryName>
      </StyledCard>
    </a>
  )
}
