import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import OrderInfo from '../molecules/OrderInfo.tsx'

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
}

class OrderConf extends React.Component<Props> {
  render() {
    const { label, products } = this.props
    return (
      <Box>
        {products.map(x => {
          return (
            <Item>
              <OrderInfo
                orderProduct={x.name}
                orderId={x.id}
                label={label}
                onClick={action('send')}
              />
            </Item>
          )
        })}
      </Box>
    )
  }
}

export default OrderConf
