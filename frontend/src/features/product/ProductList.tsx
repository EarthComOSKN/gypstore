import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCT } from './gql'
import styled from '@emotion/styled'
import { Card } from 'antd'
import _ from 'lodash'
import { FullPageLoading } from '../../component/Loading'

const { Meta } = Card

const ProductListContainer = styled.div`
  width: 100%;
  min-height: 40vh;
`

const ProductContainer = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const CoverImg = styled.img`
  padding: 1rem 3.5rem;
`
const NoProduct = styled.h2`
  text-align: center;
  background: gray;
  justify-self: center;
  padding: 1rem 1.5rem;
  width: 100%;
`

type Props = {
  category?: string
}

export const ProductList = (props: Props) => {
  const { category = '' } = props
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { pName: category },
  })
  if (loading) return <FullPageLoading />
  if (error) return <div>Error</div>
  const productItems = data.productItems as ProductItem[]
  console.log(data)
  return (
    <ProductListContainer>
      <h1>{category}</h1>
      <ProductContainer>
        {_.isEmpty(productItems) && (
          <NoProduct>ไม่มีรายการสินค้าประเภทนี้ในขณะนี้</NoProduct>
        )}
        {productItems.map(p => {
          return (
            <a href={`/product/${p.id}`}>
              <Card
                hoverable
                style={{ width: 270, margin: '0.5rem' }}
                cover={<CoverImg alt="example" src={p.image} />}
              >
                <h4>{p.name}</h4>
                <h5>{p.description}</h5>
                <p>
                  ราคา {p.price} ฿ / {p.unitType}
                </p>
              </Card>
            </a>
          )
        })}
      </ProductContainer>
    </ProductListContainer>
  )
}
