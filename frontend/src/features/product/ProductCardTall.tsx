import styled from '@emotion/styled'

import { Card, Button } from 'antd'

const { Meta } = Card

const ProductImageContainer = styled.div`
  padding: 2rem;
  width: 100%;
  > img {
    width: 100%;
  }
`

const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  align-items: center;
  > input {
    border-top-left-radius: 8em;
    border-bottom-left-radius: 8em;
  }
  > button {
    border-radius: 1em;
    width: 100%;
    background-color: rgb(241, 146, 56);
    border-color: rgb(241, 146, 56);
    :hover {
      background-color: rgba(241, 146, 56, 0.8);
      border-color: rgba(241, 146, 56, 0.8);
      color: white;
    }
  }
`

const BuyButton = styled(Button)``

const Container = styled.div<{ onlyImage: boolean }>`
  overflow: hidden;
  position: relative;
  & .ant-card-body {
    ${props => props.onlyImage && 'display:none;'}
  }
`

const Tape = styled.div`
  top: 21px;
  position: absolute;
  background-color: rgb(241, 146, 56);
  transform: rotate(-45deg);
  width: 8rem;
  display: flex;
  justify-content: center;
  left: -30px;
  color: rgb(255, 255, 255);
`

const StyledCard = styled(Card)`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  :hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }
`

type Props = {
  isHotProduct?: boolean
  buyable?: boolean
  onlyImage?: boolean
}

export const ProductCardTall = (props: Props) => {
  const {
    isHotProduct,
    buyable = true,
    onlyImage = false,
    ...restProps
  } = props
  return (
    <Container onlyImage={onlyImage} {...restProps}>
      <a href="/categories">
        <StyledCard
          hoverable
          cover={
            <ProductImageContainer>
              <img alt="example" src="/assets/logo-without-text.png" />
            </ProductImageContainer>
          }
        >
          {buyable && (
            <Meta
              description={
                <CardDescription>
                  <BuyButton size="large">เลือกดูสินค้า</BuyButton>
                </CardDescription>
              }
            />
          )}
        </StyledCard>
      </a>
      {isHotProduct && <Tape>สินค้าขายดี</Tape>}
    </Container>
  )
}
