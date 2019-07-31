import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

export interface Order {
  name: string
  id: number
}

export type OrderAction = (order: Order) => void

interface Props {
  order: Order
  label: {
    complete: string
    delete: string
  }
  onComplete: OrderAction
  onDelete: OrderAction
}

const Item = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px #eee solid;
  font-size: inherit;
`

const QueueCard: React.SFC<Props> = (props: Props) => {
  const completeClick = () => {
    const { order, onComplete } = props
    onComplete(order)
  }

  const deleteClick = () => {
    const { order, onDelete } = props
    onDelete(order)
  }

  const { order, label } = props

  return (
    <Item style={{ display: 'flex' }}>
      <div style={{ flex: '1 0 0' }}>
        <p>{order.name}</p>
        <p>{order.id}</p>
      </div>
      <Button
        style={{ flex: '0 0 auto', width: 'auto' }}
        color="primary"
        onClick={completeClick}
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
        onClick={deleteClick}
      >
        {label.delete}
      </Button>
    </Item>
  )
}

export default QueueCard
