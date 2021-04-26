import { Button, Icon, message } from 'antd'
import styled from '@emotion/styled'
import { useState } from 'react'
import { AmountInput } from '../../component/AmountInput'
import { GET_ME } from '../navigation/gql'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ADD_PRODUCT_TO_CART } from './gql'
import { FullPageLoading } from '../../component/Loading'
import { useRouter } from 'next/router'

const Container = styled.div`
  font-size: 16px;
  & > h4 {
    margin-bottom: 2rem;
  }
`

const AddCartButton = styled(Button)`
  background-color: #ff8e0a;
  width: 100%;
`

const StyledAmountInput = styled(AmountInput)`
  width: 15rem;
`

type Props = {
  product: ProductItem
}

export const ProductInformation = (props: Props) => {
  const { product } = props
  const [isLoading, setLoading] = useState(false)
  const [amount, setAmount] = useState(1)
  const { data, loading } = useQuery(GET_ME)
  const me = data?.me as User
  const router = useRouter()
  const [addProductToCard] = useMutation(ADD_PRODUCT_TO_CART)
  if (loading) return <FullPageLoading />
  const {
    name,
    description,
    brand,
    amount: productAmount,
    unitType,
    price,
  } = product
  const shid = me?.shoppingCart?.id

  const addToCart = async () => {
    if (!me) {
      router.push('/signin')
      return
    }
    setLoading(true)
    try {
      await addProductToCard({
        variables: {
          pid: product.id,
          amount,
          shid,
          key: `${product.id}${shid}`,
        },
      })
      message.success(`เพิ่ม ${product.name} สำเร็จ`)
    } catch (error) {
      message.error(`${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <h3>{name}</h3>
      <ul>
        <li>{description}</li>
        <li>{brand}</li>
        <li>
          {productAmount} {unitType}
        </li>
      </ul>
      ราคา {price} ฿ / {unitType}
      <p></p>
      <p>จัดส่งได้ภายใน 1-3 วันทำการ</p>
      <p>จำนวนที่ต้องการ ({unitType})</p>
      <StyledAmountInput amount={amount} onChange={setAmount} />
      <AddCartButton disabled={isLoading} onClick={addToCart}>
        <Icon type="shopping-cart" />
        เพิ่มไปยังรถเข็น
      </AddCartButton>
    </Container>
  )
}
