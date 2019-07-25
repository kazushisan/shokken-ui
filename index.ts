// atoms
import Button from './components/atoms/Button'
import Input from './components/atoms/Input'

// molecules
import AdminOrderCard from './components/molecules/AdminOrderCard'
import LoginForm from './components/molecules/LoginForm'
import MenuProductCard from './components/molecules/MenuProductCard'
import UserOrderCard from './components/molecules/UserOrderCard'

// organisms
import AdminOrderList from './components/organisms/AdminOrderList'

export const atoms: {
  Button: typeof Button
  Input: typeof Input
} = { Button, Input }

export const molecules: {
  AdminOrderCard: typeof AdminOrderCard
  LoginForm: typeof LoginForm
  MenuProductCard: typeof MenuProductCard
  UserOrderCard: typeof UserOrderCard
} = { AdminOrderCard, LoginForm, MenuProductCard, UserOrderCard }

export const organisms: {
  AdminOrderList: typeof AdminOrderList
} = { AdminOrderList }
