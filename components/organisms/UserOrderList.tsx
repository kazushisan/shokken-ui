import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import UserOrderCard from '../molecules/UserOrderCard'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`

interface Props {
  onOrder: (ids: number[]) => void
  onClick: () => void
  complete: string
  orders: { product: string; price: number; id: number }
}

const UserOrderList = (props: Props) => {
  const orderClick = () => {
    const { onOrder, orders } = props
    {orders.map(x => {
      onOrder(x.id, x.price)
    })}
  }

  const { onClick, complete, orders } = props
  return (
    <div>
      <Box>
        {orders.map(x => {
          return (
            <Item>
              <UserOrderCard order={x} onClick={onClick} />
            </Item>
          )
        })}
      </Box>
      <Item>
        <Button color="primary" onClick={orderClick}>
          {complete}
        </Button>
      </Item>
    </div>
  )
}

export default UserOrderList
