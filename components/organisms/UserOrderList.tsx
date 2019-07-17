import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import AdminOrderCard, { Order, OrderAction } from '../molecules/AdminOrderCard'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`

interface Props {
  products: Order[]
  label: {
    complete: string
    delete: string
  }
  onComplete: OrderAction
  onDelete: OrderAction
}

const UserOrderList = (props: Props) => {
  const { label, products, onComplete, onDelete, complete } = props
  return (
    <div>
      <Box>
        {products.map(x => {
          return (
            <Item>
              <AdminOrderCard
                order={x}
                label={label}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            </Item>
          )
        })}
      </Box>
      <Button style={{margin: 8}}>
        {complete}
      </Button>
    </div>
  )
}

export default UserOrderList
