import React from 'react'
import styled from 'styled-components'
import AdminOrderCard from '../molecules/AdminOrderCard'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`
interface Product {
  name: string
  id: number
}
interface Props {
  products: Product[]
  label: {
    complete: string
    delete: string
  }
  onClick: (product: string, id: number) => void
}

class AdminOrderList extends React.PureComponent<Props> {
  render() {
    const { label, products, onClick } = this.props
    return (
      <Box>
        {products.map(x => {
          const order = {
            product: x.name,
            id: x.id
          }
          return (
            <Item>
              <AdminOrderCard order={order} label={label} onClick={onClick} />
            </Item>
          )
        })}
      </Box>
    )
  }
}

export default AdminOrderList
