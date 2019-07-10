import React from 'react'
import styled from 'styled-components'
import UserOrderCard from '../molecules/UserOrderCard'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`
interface Product {
  name: string
  price: number
}

interface Props {
  order: {
    product: string
    price: number
  }
  priceUnit: string
  label: {
    plus: string
    minus: string
}

class UserOrderList extends React.PureComponent<Props> {
  render() {
    const { label, products, priceUnit,onClick } = this.props
    return (
      <Box>
        {products.map(x => {
          const order = {
            product: x.name,
            price: x.price
          }
          return (
            <Item>
              <UserOrderCard order={order} label={label} priceUnit={priceUnit} onClick={onClick} />
            </Item>
          )
        })}
      </Box>
    )
  }
}

export default UserOrderList
