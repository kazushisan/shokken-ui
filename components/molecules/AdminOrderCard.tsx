import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  order: {
    product: string
    id: number
  }
  label: {
    complete: string
    delete: string
  }
  onClick: (product: string, id: number) => void
}

const Item = styled.div`
  /* background-color: #cff; */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class AdminOrderCard extends React.Component<Props> {
  handleClick = () => {
    const { order, onClick } = this.props
    onClick(order.product, order.id)
  }

  render() {
    const { order, label } = this.props

    return (
      <Item style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 0' }}>
          <p>{order.product}</p>
          <p>{order.id}</p>
        </div>
        <Button
          style={{ flex: '0 0 auto', width: 'auto' }}
          color="primary"
          onClick={this.handleClick}
        >
          {label.complete}
        </Button>
        <Button
          style={{ flex: '0 0 auto', width: 'auto', marginLeft: 8,width: 'auto'}}
          color="primary"
          onClick={this.handleClick}
        >
          {label.delete}
        </Button>
      </Item>
    )
  }
}

export default AdminOrderCard
