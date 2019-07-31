import React from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  children: React.ReactNode | null
  onClick: () => void
}

const Item = styled.div`
  /* background-color: #cff; */
  padding-bottom: 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

const Img = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 100%;
  border-radius: 8px 8px 0 0;
`

const Contents = styled.div`
  text-align: center;
  margin: 32px 16px;
`

const ProductCard: React.SFC<Props> = (props: Props) => {
  return (
    <Item
      style={{ display: 'flex', flexDirection: 'column' }}
      onClick={props.onClick}
    >
      <Img
        style={{ backgroundImage: `url('${props.src}')`, textAlign: 'center' }}
      />
      <Contents>{props.children || null}</Contents>
    </Item>
  )
}

export default ProductCard
