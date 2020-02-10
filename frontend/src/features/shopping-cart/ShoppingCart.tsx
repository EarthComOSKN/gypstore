import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'
import { AmountInput } from '../../component/AmountInput'
import { Button, message, Icon, Modal } from 'antd'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { DELETE_ITEM } from './gql'
import { GET_ME } from '../navigation/gql'
const { confirm } = Modal

const Container = styled.div`
  background-color: white;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
`

const CartTable = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  background-color: rgb(236, 236, 236);
  grid-gap: 1px;
`

const CartRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  background-color: white;
`
const CartSumRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;
`
const Product = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
`
const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Amount = styled(Price)``
const ProductName = styled(Price)``
const StyledButton = styled(Button)`
  background-color: #ff8e0a;
  font-size: 1rem;
  padding: 0rem 2rem;
`
const DeleteIcon = styled(Icon)`
  cursor: pointer;
  & svg {
    fill: red;
  }
  margin-left: 1rem;
  font-size: 1.25rem;
`

export const ShoppingCart = () => {
  const { data, loading, error } = useQuery(GET_ME)
  const [deleteProductItem] = useMutation(DELETE_ITEM, {
    update(cache, mutationResult) {
      const { me } = cache.readQuery({ query: GET_ME })
      const user = me as User
      const oldShoppingItems = [...user.shoppingCart.productItems]
      const newShoppingItems = oldShoppingItems.filter(
        i => i.id !== mutationResult.data.deleteShoppingCartItem.id,
      )
      const newUser = { ...user }
      newUser.shoppingCart.productItems = [...newShoppingItems]
      // cache.writeData(newUser)
    },
  })
  if (loading) return <div>Lodaing...</div>
  const me = data.me as User
  const shoppingCart = me.shoppingCart as ShoppingCart
  const shoppingCartItems = shoppingCart.productItems

  const showDeleteConfirm = async (key: string, name: string) => {
    confirm({
      title: `คุณต้องการนำสินค้า ${name} ออกใช่หรือไม่?`,
      content: '',
      okText: 'ลบ',
      okType: 'danger',
      cancelText: 'ยกเลิก',
      async onOk() {
        await deleteItem(key)
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const deleteItem = async (key: string) => {
    try {
      await deleteProductItem({ variables: { key } })
      message.success('รบรายการ สำเร็จ')
    } catch (error) {
      message.error('error has occur')
    }
  }

  return (
    <Container>
      <h2>รถเข็นสินค้า ({shoppingCartItems.length})</h2>
      <CartTable>
        <CartRow>
          <h4>สินค้า</h4>
          <h4>ราคา</h4>
          <h4>ปริมาณ</h4>
          <h4>ราคารวม</h4>
        </CartRow>
        {shoppingCartItems.map(item => {
          const { product, amount } = item
          return (
            <CartRow>
              <Product>
                <ProductCardTall buyable={false} onlyImage />
                <ProductName>
                  {product.name}
                  <DeleteIcon
                    onClick={() =>
                      showDeleteConfirm(
                        `${product.id}${shoppingCart.id}`,
                        product.name,
                      )
                    }
                    type="delete"
                  />
                </ProductName>
              </Product>
              <Price>
                {product.salePrice} บาท / {product.unitType}
              </Price>
              <Amount>
                <AmountInput onChange={e => null} amount={amount} />
              </Amount>
              <Price>
                {(+product.salePrice * amount).toLocaleString()} บาท
              </Price>
            </CartRow>
          )
        })}
        <div>
          <CartSumRow>
            <h2>ราคารวม ({shoppingCartItems.length} รายการ)</h2>
            <h2>
              {shoppingCartItems
                .reduce(
                  (prv, cur) => prv + cur.amount * +cur.product.salePrice,
                  0,
                )
                .toLocaleString()}{' '}
              บาท
            </h2>
          </CartSumRow>
          <CartSumRow>
            <StyledButton>พิมพ์ใบเสนอราคา</StyledButton>
            <StyledButton>ถัดไป</StyledButton>
          </CartSumRow>
        </div>
      </CartTable>
    </Container>
  )
}
