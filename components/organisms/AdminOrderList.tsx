import React from 'react'
import styled from 'styled-components'
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

const AdminOrderList = (props: Props) => {
  const { label, products, onComplete, onDelete } = props
  return (
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
  )
}

export default AdminOrderList
