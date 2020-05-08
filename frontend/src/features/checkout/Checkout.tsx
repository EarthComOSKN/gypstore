import styled from '@emotion/styled'
import { Button, Icon, Modal, Input, message } from 'antd'
import { ProductCardTall } from '../product/ProductCardTall'
import { useState, useEffect, useMemo } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_ME } from '../navigation/gql'
import { FullPageLoading } from '../../component/Loading'
import {
  CREATE_LOCATION,
  CREATE_ORDER,
  CREATE_ORDER_ITEMS,
  PAYMENT,
} from './gql'

import { Router, useRouter } from 'next/router'

const Container = styled.div`
  padding: 0 4rem;
`
const AddressContainer = styled.div`
  padding: 2rem;
  width: 90%;
  margin: auto;
  background: white;
`

const CheckoutContainer = styled.div`
  background-color: white;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem 4rem;
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
  padding: 0.5rem 0rem;
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
const SumPrice = styled(Price)`
  justify-content: flex-end;
`
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
const SumPriceCol = styled.h4`
  text-align: right;
`

export const Checkout = props => {
  const { shoppingCartItems = [] } = props
  const { data, loading, error, refetch } = useQuery(GET_ME)
  const [address, setAddress] = useState(null)
  const [visible, setVisible] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [newAddressName, setNewAddressName] = useState('')
  const [newAddressLocation, setNewAddressLocation] = useState('')
  const [createOrder] = useMutation(CREATE_ORDER)
  const [createOrderItem] = useMutation(CREATE_ORDER_ITEMS)
  const [payment] = useMutation(PAYMENT)
  const router = useRouter()

  const [createAddress] = useMutation(CREATE_LOCATION)
  const sum = useMemo(() => {
    if (shoppingCartItems.length === 0) return 0
    return shoppingCartItems.reduce(
      (prv, cur) => prv + cur.amount * +cur.product.salePrice,
      0,
    )
  }, [shoppingCartItems])
  useEffect(() => {
    console.log(data?.me?.address?.length)
    if (data?.me?.addresses && data?.me?.addresses?.length === 0) {
      setVisible(true)
    } else {
      setAddress(data?.me?.addresses[0])
    }
  }, [data])
  if (loading) return <FullPageLoading />
  const paymentProcess = async () => {
    const hide = message.loading('เตรียมการชำระเงิน...')
    const res = await createOrder({
      variables: {
        userId: data.me.id,
        status: 'PAYMENT PROCESS',
      },
    })
    const createOrderData = res.data as Mutation
    const oid = createOrderData.createOrder.id
    await Promise.all(
      shoppingCartItems.map(shopItem => {
        createOrderItem({
          variables: {
            oid: oid,
            key: `${oid}${shopItem.product.id}`,
            pid: shopItem.product.id,
            amount: shopItem.amount,
            price: +shopItem.product.salePrice * shopItem.amount,
          },
        })
      }),
    )
    hide()

    const { OmiseCard } = window as any
    OmiseCard.open({
      amount: sum * 100,
      currency: 'THB',
      defaultPaymentMethod: 'credit_card',
      onCreateTokenSuccess: async res => {
        try {
          const paymentResponse = await payment({
            variables: {
              oid,
              token: res,
              amount: sum * 100,
              uid: data?.me.id,
            },
          })
          message.success('ชำระเงินสำเร็จ')
          router.push('/')
        } catch (error) {
          message.error('ชำระเงินไม่สำเร็จ')
        }
      },
    })
  }

  return (
    <>
      <Modal
        title="Add A New Address"
        visible={visible}
        confirmLoading={fetching}
        onOk={async () => {
          setFetching(true)
          await createAddress({
            variables: {
              uid: data?.me.id,
              location: newAddressLocation,
              name: newAddressName,
            },
          })
          setFetching(false)
          setVisible(false)
          refetch()
        }}
        onCancel={() => setVisible(false)}
      >
        <h3>Name</h3>
        <Input
          value={newAddressName}
          onChange={e => setNewAddressName(e.target.value)}
          placeholder="ชื่อสถานที่"
        />
        <h3 style={{ marginTop: '1rem' }}>Location</h3>
        <Input
          placeholder="ที่ตั้ง"
          value={newAddressLocation}
          onChange={e => setNewAddressLocation(e.target.value)}
        />
      </Modal>
      <Container>
        <AddressContainer>
          <h2>Delivery Address</h2>
          {address && (
            <p>
              {address.name} {address.Address}
            </p>
          )}
          <StyledButton onClick={() => setVisible(true)}>
            Add A New Address
          </StyledButton>
        </AddressContainer>

        <CheckoutContainer>
          <h2>รถเข็นสินค้า ({shoppingCartItems.length})</h2>
          <CartTable>
            <CartRow>
              <h4>สินค้า</h4>
              <h4>ราคา</h4>
              <h4>ปริมาณ</h4>
              <SumPriceCol>ราคารวม</SumPriceCol>
            </CartRow>
            {shoppingCartItems.length === 0 && (
              <NoItems>ไม่มีรายการในขณะนี้</NoItems>
            )}
            {shoppingCartItems.map(item => {
              const { product, amount } = item

              return (
                <CartRow>
                  <Product>
                    <ProductCardTall
                      buyable={false}
                      onlyImage
                      style={{ width: 100, height: 100 }}
                      image={
                        product.image ||
                        'https://storage.cloud.google.com/gypstore-storage/productImages/4.jpg'
                      }
                    />
                    <ProductName>{product.name}</ProductName>
                  </Product>
                  <Price>
                    {product.salePrice} บาท / {product.unitType}
                  </Price>
                  <Amount>{amount}</Amount>
                  <SumPrice>
                    {(+product.salePrice * amount).toLocaleString()} บาท
                  </SumPrice>
                </CartRow>
              )
            })}
            <div>
              <CartSumRow>
                <h3>vat 7%</h3>
                <h3>{(sum * 0.07).toFixed(2).toLocaleString()} บาท</h3>
              </CartSumRow>
              <CartSumRow>
                <h2>ราคารวม ({shoppingCartItems.length} รายการ)</h2>
                <h3>{sum.toFixed(2).toLocaleString()} บาท</h3>
              </CartSumRow>
              <CartSumRow>
                <div></div>
                <StyledButton
                  disabled={shoppingCartItems.length === 0}
                  onClick={async () => {
                    await paymentProcess()
                  }}
                >
                  ชำระเงิน
                </StyledButton>
              </CartSumRow>
            </div>
          </CartTable>
        </CheckoutContainer>
      </Container>
    </>
  )
}
