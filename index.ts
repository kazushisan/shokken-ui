// atoms
import Button from './components/atoms/Button'
import Input from './components/atoms/Input'

// molecules
import AdminOrderCard from './components/molecules/AdminOrderCard'
import LoginForm from './components/molecules/LoginForm'
import AdminProductCard from './components/molecules/AdminProductCard'


// organisms
import AdminOrderList from './components/organisms/AdminOrderList'

export const atoms: {
  Button: typeof Button
  Input: typeof Input
} = { Button, Input }

export const molecules: {
  AdminOrderCard: typeof AdminOrderCard
  LoginForm: typeof LoginForm
  AdminProductCard: typeof AdminProductCard
} = { AdminOrderCard, LoginForm, AdminProductCard }

export const organisms: {
  AdminOrderList: typeof AdminOrderList
} = { AdminOrderList }
