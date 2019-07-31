import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  children: React.ReactNode | null
  label: {
    complete: string
    delete: string
  }
  onComplete: () => void
  onDelete: () => void
}

const Item = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px #eee solid;
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

const QueueCard: React.SFC<Props> = (props: Props) => {
  return (
    <Item style={{ display: 'flex' }}>
      <Content>{props.children}</Content>
      <FlexButton color="primary" onClick={props.onComplete}>
        {props.label.complete}
      </FlexButton>
      <FlexButton color="danger" onClick={props.onDelete}>
        {props.label.delete}
      </FlexButton>
    </Item>
  )
}

export default QueueCard
