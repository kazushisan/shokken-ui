import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

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
  onClick: (
    product: string,
    price: number,
    count: number,
    label: string
  ) => void
}
interface State {
  count: number
}

const Item = styled.div`
  /* background-color: #cff; */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class UserOrderCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { count: 0 }
  }

  plusClick = () => {
    const { order, onClick } = this.props
    const { count } = this.state
    this.setState({
      count: count + 1
    })
    onClick(order.product, order.price, count + 1, 'plus')
  }

  minusClick = () => {
    const { order, onClick } = this.props
    const { count } = this.state
    if (count > 0) {
      this.setState({
        count: count - 1
      })
      onClick(order.product, order.price, count - 1, 'minus')
    } else {
      onClick(order.product, order.price, count, 'minus')
    }
  }

  render() {
    const { order, label, priceUnit } = this.props
    const { count } = this.state

    return (
      <Item style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 0' }}>
          <p>{order.product}</p>
          <p>
            {order.price}
            {priceUnit}
          </p>
        </div>
        <Button
          style={{
            flex: '0 0 auto',
            width: 'auto'
          }}
          color="primary"
          onClick={this.plusClick}
        >
          {label.plus}
        </Button>
        <p style={{ padding: 12 }}>{count}</p>
        <Button
          style={{
            flex: '0 0 auto',
            width: 'auto'
          }}
          color="primary"
          onClick={this.minusClick}
        >
          {label.minus}
        </Button>
      </Item>
    )
  }
}

export default UserOrderCard
