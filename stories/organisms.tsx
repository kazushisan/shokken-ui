import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import AdminOrderList from '../components/organisms/AdminOrderList'
import UserOrderList from '../components/organisms/UserOrderList'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('organisms', module)
stories.addDecorator(withKnobs)

stories.add('AdminOrderList', () => {
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
  const label = {
    complete: compLabel,
    delete: delLabel
  }

  return (
    <Wrap>
      <AdminOrderList
        products={products}
        label={label}
        onComplete={action('complete')}
        onDelete={action('delete')}
      />
    </Wrap>
  )
})

stories.add('UserOrderList', () => {
  const compLabel = text('compLabel', '商品完成')
  const delLabel = text('delLabel', '削除')
  const complete = text('complete', '注文確定')
  const names = array('names', ['ラーメン', 'うどん', 'カレー', '唐揚げ定食'])
  const ids = array('id', [1, 2, 3, 4])
  const products = []

  for (let i = 0; i < Math.min(names.length, ids.length); i += 1) {
    products.push({
      name: names[i],
      id: ids[i]
    })
  }
  const label = {
    complete: compLabel,
    delete: delLabel
  }

  return (
    <Wrap>
      <UserOrderList
        products={products}
        label={label}
        onComplete={action('complete')}
        onDelete={action('delete')}
        complete={complete}
      />
    </Wrap>
  )
})
