import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  order: {
    name: string
    id: number
  }
  label: {
    complete: string
    delete: string
  }
  onClick: (product: string, id: number, label: string) => void
}

const Item = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class AdminOrderCard extends React.Component<Props> {
  completeClick = () => {
    const { order, onClick } = this.props
    onClick(order.name, order.id, 'complete')
  }

  deleteClick = () => {
    const { order, onClick } = this.props
    onClick(order.name, order.id, 'delete')
  }

  render() {
    const { order, label } = this.props

    return (
      <Item style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 0' }}>
          <p>{order.name}</p>
          <p>{order.id}</p>
        </div>
        <Button
          style={{ flex: '0 0 auto', width: 'auto' }}
          color="primary"
          onClick={this.completeClick}
        >
          {label.complete}
        </Button>
        <Button
          style={{
            flex: '0 0 auto',
            width: 'auto',
            marginLeft: 8
          }}
          color="primary"
          onClick={this.deleteClick}
        >
          {label.delete}
        </Button>
      </Item>
    )
  }
}

export default AdminOrderCard
