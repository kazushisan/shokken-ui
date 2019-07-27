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

export interface Order {
  product: string
  price: number
  id: number
  count: number
}

interface Props {
  onOrder: (id: number, count: number) => void
  onClick: (id: number, count: number) => void
  complete: string
  orders: Order[]
}

interface State {
  orders: Order[]
}

class UserOrderList extends React.Component<Props, State> {
  state = { orders: this.props.orders }

  stateClick = (count: number, id: number) => {
    const { onClick } = this.props
    const { orders } = this.state
    orders.map(x => {
      if (x.id === id) {
        x.count = count
      }
    })
    onClick(id, count)
  }

  orderClick = () => {
    const { onOrder } = this.props
    const { orders } = this.state
    orders.map(x => {
      onOrder(x.id, x.count)
    })
  }

  render() {
    const { complete, orders } = this.props
    return (
      <div>
        <Box>
          {orders.map(x => {
            return (
              <Item>
                <UserOrderCard order={x} onClick={this.stateClick} />
              </Item>
            )
          })}
        </Box>
        <Item>
          <Button color="primary" onClick={this.orderClick}>
            {complete}
          </Button>
        </Item>
      </div>
    )
  }
}

export default UserOrderList
