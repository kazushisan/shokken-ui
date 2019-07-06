import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import OrderConf from '../components/organisms/OrderConf'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('organisms', module)
stories.addDecorator(withKnobs)

stories.add('OrderConf', () => {
  const compLabel = text('compLabel', '商品完成')
  const delLabel = text('delLabel', '削除')
  const names = array('names', ['ラーメン', 'うどん', 'カレー', '唐揚げ定食'])
  const ids = array('id', [1, 2, 3, 4])
  const products = []

  for (let i = 0; i < Math.min(names.length, ids.length); i += 1) {
    products.push({
      name: names[i],
      id: ids[i]
    })
  }

  return (
    <Wrap>
      <OrderConf
        products={products}
        compLabel={compLabel}
        delLabel={delLabel}
        onClick={action('send')}
      />
    </Wrap>
  )
})
