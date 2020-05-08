import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'
import { AmountInput } from '../../component/AmountInput'
import { Button, message, Icon, Modal, Spin } from 'antd'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  DELETE_ITEM,
  CREATE_QUOTATION,
  CREATE_QUOTATION_ITEMS,
  CLEAR_SHOPPING_CART,
} from './gql'
import { GET_ME } from '../navigation/gql'
import { useRouter } from 'next/router'
import { FullPageLoading } from '../../component/Loading'
import { useEffect, useMemo } from 'react'
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
  padding: 0.5rem 2rem;
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
  justify-content: flex-start;
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
const NoItems = styled.div`
  display: flex;
  height: 10rem;
  justify-content: center;
  align-items: center;
`

export const ShoppingCart = () => {
  const { data, loading, error } = useQuery(GET_ME)
  const router = useRouter()
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
  const [createQuotation] = useMutation(CREATE_QUOTATION)
  const [createQuotationItem] = useMutation(CREATE_QUOTATION_ITEMS)

  const [resetShoppingCart] = useMutation(CLEAR_SHOPPING_CART)
  const me = data?.me as User

  const sum = useMemo(() => {
    if (loading || !me) return 0
    const shoppingCart = me.shoppingCart as ShoppingCart
    const shoppingCartItems = shoppingCart.productItems
    return shoppingCartItems.reduce(
      (prv, cur) => prv + cur.amount * +cur.product.salePrice,
      0,
    )
  }, [me])
  if (loading) return <FullPageLoading />
  if (!me) {
    router.push('/signin')
    return null
  }
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

  const clearShoppingCart = async () => {
    const hide = message.loading('กำลังล้าง ตะกร้าสินค้า')
    resetShoppingCart({
      variables: {
        sid: shoppingCart.id,
      },
    })
      .then(res => {
        hide()
        message.success('ล้างตะกร้าสำเร็จ')
        window.location.reload()
      })
      .catch(err => {
        hide()
        message.error('เกิดข้อผิดพลาด')
      })
  }

  const requestQuotation = async () => {
    const hide = message.loading('กำลังยื่นขอ ใบเสนอราคา')
    try {
      const res = await createQuotation({
        variables: {
          userId: me.id,
          status: 'PENDING',
        },
      })
      const data = res.data as Mutation
      const qid = data.createQuotation.id
      await Promise.all(
        shoppingCartItems.map(shopItem => {
          createQuotationItem({
            variables: {
              qid: qid,
              key: `${qid}${shopItem.product.id}`,
              pid: shopItem.product.id,
              amount: shopItem.amount,
              price: +shopItem.product.salePrice * shopItem.amount,
            },
          })
        }),
      )
      hide()
      message.success('ยื่นขอสำเร็จ')
    } catch (error) {
      hide()
      message.error('เกิดข้อผิดพลาด')
    }
    Modal.confirm({
      title: 'ต้องการล้างตะกร้าสินค้าหรือไม่?',

      onOk() {
        clearShoppingCart()
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
        {shoppingCartItems.length === 0 && (
          <NoItems>ไม่มีรายการในขณะนี้</NoItems>
        )}
        {shoppingCartItems.map(item => {
          const { product, amount } = item
          console.log(product)
          return (
            <CartRow>
              <Product>
                <ProductCardTall
                  style={{ width: 100, height: 100 }}
                  image={
                    product.image ||
                    'https://storage.cloud.google.com/gypstore-storage/productImages/4.jpg'
                  }
                  buyable={false}
                  onlyImage
                />
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
            <h3>vat 7%</h3>
            <h3>{(sum * 0.07).toLocaleString()} บาท</h3>
          </CartSumRow>
          <CartSumRow>
            <h2>ราคารวม ({shoppingCartItems.length} รายการ)</h2>
            <h3>{sum.toLocaleString()} บาท</h3>
          </CartSumRow>
          <CartSumRow>
            <StyledButton onClick={() => requestQuotation()}>
              ขอใบเสนอราคา
            </StyledButton>
            <div></div>
            <StyledButton
              disabled={shoppingCartItems.length === 0}
              onClick={async () => {
                // await paymentProcess()
                router.push('/checkout?state=' + JSON.stringify(shoppingCart))
              }}
            >
              ชำระเงิน
            </StyledButton>
          </CartSumRow>
        </div>
      </CartTable>
    </Container>
  )
}
