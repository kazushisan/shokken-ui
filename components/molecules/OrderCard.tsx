import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  add: () => void
  substract: () => void
  children: React.ReactNode
}

const Item = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px #eee solid;
  font-size: inherit;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  flex: 1 0 0;
`

const FlexButton = styled(Button)`
  flex: 0 0 auto;
  width: auto;
  margin-left: 8px;
`

const OrderCard: React.SFC<Props> = (props: Props) => {
  return (
    <Item>
      <Content>{props.children}</Content>
      <FlexButton color="primary" onClick={props.add}>
        +
      </FlexButton>
      <FlexButton onClick={props.substract}>-</FlexButton>
    </Item>
  )
}

export default OrderCard
