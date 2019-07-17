import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  onClick: (count: number, id: number) => void
  id: number
}
interface State {
  count: number
}

const Item = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

const FlexButton = styled(Button)`
  flex: 0 0 auto;
  width: auto;
`

class UserOrderCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { count: 0 }
  }

  plusClick = () => {
    const { onClick, id } = this.props
    const { count } = this.state
    this.setState({
      count: count + 1
    })
    onClick(count + 1, id)
  }

  minusClick = () => {
    const { onClick, id } = this.props
    const { count } = this.state
    if (count > 0) {
      this.setState({
        count: count - 1
      })
      onClick(count - 1, id)
    } else {
      onClick(count, id)
    }
  }

  render() {
    const order = {
      product: '商品名',
      price: '0'
    }
    const priceUnit = '円'

    const label = {
      plus: '+',
      minus: '-'
    }

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
        <FlexButton color="primary" onClick={this.plusClick}>
          {label.plus}
        </FlexButton>
        <p style={{ padding: 12 }}>{count}</p>
        <FlexButton color="primary" onClick={this.minusClick}>
          {label.minus}
        </FlexButton>
      </Item>
    )
  }
}

export default UserOrderCard
