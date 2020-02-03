import styled from '@emotion/styled'

const Container = styled.div`
  margin: 2rem 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr 1fr;
  height: 2rem;
  grid-gap: 1px;
  background-color: black;
`

const ChangeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: rgb(238, 237, 233);
  }
`

type Props = {
  onChange: (e) => void
  amount: number
}

export const AmountInput = (props: Props) => {
  const { onChange, amount, ...restProps } = props
  return (
    <Container {...restProps}>
      <ChangeButton onClick={() => onChange(amount - 1)}>-</ChangeButton>
      <ChangeButton>{amount}</ChangeButton>
      <ChangeButton onClick={() => onChange(amount + 1)}>+</ChangeButton>
    </Container>
  )
}
